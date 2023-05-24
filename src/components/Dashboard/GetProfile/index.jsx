import React, { useState, useEffect } from 'react';
import { API_URL, API_PROFILES } from '../../constants/urls';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import Container from '../../styles/Container/index.styled';
// import { useNavigate } from 'react-router-dom';
import profileName from '../../api/localStorage/profileName';
import accessToken from '../../api/localStorage/accessToken';
import VenueCard from './VenueCard';
import BookingCard from './BookingCard';

/*
  Dashboard component
*/

function GetProfile() {
  const [profile, setProfile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    const fetchVenue = async () => {
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

    fetchVenue();
  }, [profileName]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <p>{profile.name}</p>
      <p>{profile.email}</p>
      {profile.venueManager === true}
      <p>Venue Manager: {profile.venueManager ? 'Yes' : 'No'}</p>
      <img src={profile.avatar} alt={`Avatar by ${profile.name}`} />

      <p>Venues by you: {profile._count.venues}</p>
      {profile.venues.length > 0 &&
        profile.venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}

      <p>Bookings by you: {profile._count.bookings}</p>
      {profile.bookings.length > 0 &&
        profile.bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
    </Container>
  );
}

export default GetProfile;
