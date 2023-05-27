import React, { useState, useEffect } from 'react';
import { API_URL, API_PROFILES } from '../../constants/urls';
import * as S from './index.styled';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import profileName from '../../api/localStorage/profileName';
import accessToken from '../../api/localStorage/accessToken';
import VenueCard from './VenueCard';
import updateAvatar from '../../api/updateAvatar';
import closeIcon from '../../../assets/close.png';
import AvatarPlaceholderImage from '../../../assets/profile.png';
import * as Yup from 'yup';
import BookingCard from './BookingCard';
import Container from '../../styles/Container/index.styled';
import venueManagerStatus from '../../api/localStorage/venueManagerStatus';
import { FormErrorMessage } from '../../styles/Form/index.styled';

const schema = Yup.object().shape({
  avatarUrl: Yup.string()
    .url('Must be a valid URL')
    .required('Avatar URL is required'),
});

/*
  Get profile component, for fetching and displaying profile data 
*/

function GetProfile() {
  const [profile, setProfile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');
  const [avatarImageError, setAvatarImageError] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    if (accessToken && accessToken.length) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_PROFILES}/${profileName}?_bookings=true&_venues=true`,
          options
        );
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();

        setProfile(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [profileName]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAvatarUpdate = async () => {
    try {
      await schema.validate({ avatarUrl: newAvatarUrl });
      await updateAvatar(profile.name, newAvatarUrl);
      setProfile((prevProfile) => ({ ...prevProfile, avatar: newAvatarUrl }));
      closeModal();
    } catch (error) {
      setErrors({ avatarUrl: error.message });
    }
  };

  const handleAvatarClear = async () => {
    await updateAvatar(profile.name, null);
    setProfile((prevProfile) => ({ ...prevProfile, avatar: null }));
    closeModal();
  };

  const handleAvatarImageError = () => {
    setAvatarImageError(true);
  };

  return (
    isLoggedIn && (
      <Container>
        <S.Heading>Dashboard</S.Heading>

        <S.LogOutButtonContainer>
          <S.LogOutButton onClick={handleLogOut}>Log out</S.LogOutButton>
        </S.LogOutButtonContainer>
        {profile.avatar && profile.avatar.length > 0 ? (
          <S.AvatarContainer>
            <S.AvatarImage
              src={avatarImageError ? AvatarPlaceholderImage : profile.avatar}
              alt={`Avatar by ${profile.name}`}
              onError={handleAvatarImageError}
              onClick={openModal}
            />

            <S.UpdateAvatarButton onClick={openModal}>
              Update Avatar
            </S.UpdateAvatarButton>
          </S.AvatarContainer>
        ) : (
          <S.AvatarContainer>
            <S.AvatarImage
              src={AvatarPlaceholderImage}
              alt={`Avatar by ${profile.name}`}
              onClick={openModal}
            />
            <S.UpdateAvatarButton onClick={openModal}>
              Update Avatar
            </S.UpdateAvatarButton>
          </S.AvatarContainer>
        )}
        <S.UserDetailsContainer>
          <S.Username>{profile.name}</S.Username>
          <p>{profile.email}</p>
          {profile.venueManager === true ? (
            <p>Venue Manager</p>
          ) : (
            <p>Customer</p>
          )}
        </S.UserDetailsContainer>

        {isModalOpen && (
          <S.Overlay onClick={closeModal}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
              <S.ModalHeading>update avatar</S.ModalHeading>
              <S.StyledInput
                type="url"
                value={newAvatarUrl}
                onChange={(e) => setNewAvatarUrl(e.target.value)}
                placeholder="Enter new avatar URL"
                required
              />
              {errors.avatarUrl && (
                <FormErrorMessage>{errors.avatarUrl}</FormErrorMessage>
              )}
              <S.CloseButton onClick={closeModal}>
                <img src={closeIcon} />
              </S.CloseButton>
              <S.SubmitButton onClick={handleAvatarUpdate}>
                Submit
              </S.SubmitButton>
              {profile.avatar && profile.avatar.length > 0 && (
                <S.RemoveAvatarButton onClick={handleAvatarClear}>
                  Remove Avatar
                </S.RemoveAvatarButton>
              )}
            </S.Modal>
          </S.Overlay>
        )}
        <S.DashboardContent>
          <S.DashboardSectionOne>
            <S.SecondaryHeadingContainer>
              <h2>Bookings by you: </h2> <h2>{profile._count.bookings}</h2>
            </S.SecondaryHeadingContainer>
            <S.BookingsContainer>
              {profile.bookings.length > 0 ? (
                profile.bookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <S.DashboardMessageContainer>
                  <S.DashboardMessage>
                    You have made no bookings. You can find venues to book by
                    clicking <S.StyledLink to="/">here</S.StyledLink>.
                  </S.DashboardMessage>
                </S.DashboardMessageContainer>
              )}
            </S.BookingsContainer>
          </S.DashboardSectionOne>
          <S.DashboardSectionTwo>
            <S.SecondaryHeadingContainer>
              <h2>Venues by you: </h2>
              <h2>{profile._count.venues}</h2>
            </S.SecondaryHeadingContainer>

            {venueManagerStatus === true ? (
              profile.venues.length > 0 ? (
                profile.venues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))
              ) : (
                <S.DashboardMessageContainer>
                  <S.DashboardMessage>
                    You have no venues listed. You can publish a venue by
                    clicking{' '}
                    <S.StyledLink to="/list-your-home">here</S.StyledLink>.
                  </S.DashboardMessage>
                </S.DashboardMessageContainer>
              )
            ) : (
              <S.DashboardMessageContainer>
                <S.DashboardMessage>
                  You need a venue manager account in order to list a venue.
                  Please make a new venue manager account if you wish to publish
                  your own venues.
                </S.DashboardMessage>
              </S.DashboardMessageContainer>
            )}
          </S.DashboardSectionTwo>
        </S.DashboardContent>
      </Container>
    )
  );
}

export default GetProfile;
