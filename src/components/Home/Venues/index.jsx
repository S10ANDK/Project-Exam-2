import React, { useEffect, useState } from 'react';
import * as urls from '../../constants/urls';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import NoItemsMessage from '../../messages/NoItemsMessage';
import VenueCard from './VenueCard';
import { VenuesContainer } from '../Venues/index.styled';

/* 
    Function for fetching and displaying venues 
*/

function DisplayVenueList() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        const response = await fetch(`${urls.API_URL}${urls.API_VENUES}`);
        const results = await response.json();
        setVenues(results);
        console.log(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getVenues(urls.API_URL);
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (venues.length <= 0) {
    return <NoItemsMessage />;
  }

  return (
    <VenuesContainer>
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </VenuesContainer>
  );
}

export default DisplayVenueList;
