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
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        const limit = 20;
        const offset = pageIndex * limit;
        const response = await fetch(
          `${urls.API_URL}${urls.API_VENUES}?sort=created&sortOrder=asc&limit=${limit}&offset=${offset}`
        );
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
  }, [pageIndex]);

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
  };

  const handleNextClick = () => {
    setPageIndex(pageIndex + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevClick = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      window.scrollTo(0, 0);
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
            {filteredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </S.VenuesContainer>
        </>
      )}

      {filteredVenues.length > 0 ? (
        <S.ListButtonContainer>
          <button onClick={handlePrevClick} disabled={pageIndex === 0}>
            Prev
          </button>
          <button
            onClick={handleNextClick}
            disabled={
              pageIndex === filteredVenues.length - 1 || venues.length <= 19
            }
          >
            Next
          </button>
        </S.ListButtonContainer>
      ) : null}
    </>
  );
}

export default DisplayVenueList;
