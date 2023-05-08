import React, { useEffect, useState } from 'react';
import * as urls from '../../constants/urls';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import NoItemsMessage from '../../messages/NoItemsMessage';
import VenueCard from './VenueCard';
import { ListButtonContainer, VenuesContainer } from '../Venues/index.styled';

/* 
    Function for fetching and displaying venues 
*/

function DisplayVenueList() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(19);

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

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 20);
      setEndIndex(endIndex - 20);
    }
  };

  const handleNextClick = () => {
    if (endIndex < venues.length - 1) {
      const newEndIndex = Math.min(endIndex + 20, venues.length - 1);
      setStartIndex(startIndex + 20);
      setEndIndex(newEndIndex);
    }
  };

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
    <>
      <VenuesContainer>
        {venues.slice(startIndex, endIndex + 1).map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </VenuesContainer>
      <ListButtonContainer>
        <button onClick={handlePrevClick} disabled={startIndex === 0}>
          Prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={endIndex === venues.length - 1}
        >
          Next
        </button>
      </ListButtonContainer>
    </>
  );
}

export default DisplayVenueList;
