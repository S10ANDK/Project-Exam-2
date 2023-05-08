import React, { useEffect, useState } from 'react';
import * as urls from '../../constants/urls';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import NoItemsMessage from '../../messages/NoItemsMessage';
import VenueCard from './VenueCard';
import * as S from '../Venues/index.styled';
import Search from '../Search';

/* 
    Function for fetching and displaying venues 
*/

function DisplayVenueList() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(19);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        const response = await fetch(`${urls.API_URL}${urls.API_VENUES}`);
        const results = await response.json();
        setVenues(results);
        setFilteredVenues(results);
        console.log(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getVenues();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = venues.filter(
      (venue) =>
        venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        venue.location.country
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        venue.location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVenues(filtered);
    setStartIndex(0);
    setEndIndex(19);
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 20);
      setEndIndex(endIndex - 20);
    }
  };

  const handleNextClick = () => {
    if (endIndex < filteredVenues.length - 1) {
      const newEndIndex = Math.min(endIndex + 20, filteredVenues.length - 1);
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
      <Search onSearch={handleSearch} minLength={3} />

      {filteredVenues.length === 0 && searchTerm.length >= 3 ? (
        <S.NoSearchResultsMessage>
          No results found for <span>&apos;{searchTerm}&apos;</span>.
        </S.NoSearchResultsMessage>
      ) : (
        <>
          <S.VenuesContainer>
            {filteredVenues.slice(startIndex, endIndex + 1).map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </S.VenuesContainer>
          {filteredVenues.length > 20 ? (
            <S.ListButtonContainer>
              <button onClick={handlePrevClick} disabled={startIndex === 0}>
                Prev
              </button>
              <button
                onClick={handleNextClick}
                disabled={endIndex === filteredVenues.length - 1}
              >
                Next
              </button>
            </S.ListButtonContainer>
          ) : null}
        </>
      )}
    </>
  );
}

export default DisplayVenueList;
