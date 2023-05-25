import React, { useState, useEffect } from 'react';
import { API_URL, API_PROFILES } from '../../constants/urls';
import * as S from './index.styled';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import Container from '../../styles/Container/index.styled';
import { useNavigate } from 'react-router-dom';
import profileName from '../../api/localStorage/profileName';
import accessToken from '../../api/localStorage/accessToken';
import VenueCard from './VenueCard';
import updateAvatar from '../../api/updateAvatar';
import closeIcon from '../../../assets/close.png';
import AvatarPlaceholderImage from '../../../assets/profile.png';
import * as Yup from 'yup';
import BookingCard from './BookingCard';

const schema = Yup.object().shape({
  avatarUrl: Yup.string()
    .url('Must be a valid URL')
    .required('Avatar URL is required'),
});

/*
  Get profile component
*/

function GetProfile() {
  const [profile, setProfile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');
  // const [imageError, setImageError] = useState(false);
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

  // const handleImageError = () => {
  //   setImageError(true);
  // };

  const handleAvatarImageError = () => {
    setAvatarImageError(true);
  };

  return (
    isLoggedIn && (
      <Container>
        <S.LogOutButton onClick={handleLogOut}>Log out</S.LogOutButton>

        {profile.avatar && profile.avatar.length > 0 ? (
          <S.AvatarImage
            src={avatarImageError ? AvatarPlaceholderImage : profile.avatar}
            alt={`Avatar by ${profile.name}`}
            onError={handleAvatarImageError}
            onClick={openModal}
          />
        ) : (
          <img
            src={AvatarPlaceholderImage}
            alt={`Avatar by ${profile.name}`}
            onClick={openModal}
          />
        )}
        <S.UpdateAvatarButton onClick={openModal}>
          Update Avatar
        </S.UpdateAvatarButton>
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        {profile.venueManager === true}
        <p>Venue Manager: {profile.venueManager ? 'Yes' : 'No'}</p>

        {isModalOpen && (
          <S.Overlay onClick={closeModal}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
              <S.ModalHeading>Update Avatar</S.ModalHeading>
              <S.StyledInput
                type="url"
                value={newAvatarUrl}
                onChange={(e) => setNewAvatarUrl(e.target.value)}
                placeholder="Enter new avatar URL"
                required
              />
              {errors.avatarUrl && <p>{errors.avatarUrl}</p>}
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

        <p>Venues by you: {profile._count.venues}</p>
        {profile.venues.length > 0 &&
          profile.venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}

        <p>Bookings by you: {profile._count.bookings}</p>
        <S.BookingsContainer>
          {profile.bookings.length > 0 &&
            profile.bookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
        </S.BookingsContainer>
      </Container>
    )
  );
}

export default GetProfile;
