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

function DisplayVenueList({ filters }) {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        const limit = 20;
        const offset = pageIndex * limit;
        const response = await fetch(
          `${urls.API_URL}${urls.API_VENUES}?sort=created&sortOrder=${sortOrder}&limit=${limit}&offset=${offset}`
        );
        let results = await response.json();

        if (filters.length > 0) {
          results = results.filter((venue) =>
            filters.every((filter) => venue.meta[filter])
          );
        }

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
  }, [pageIndex, sortOrder, filters]);

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

      <S.SortButtonContainer>
        <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
        <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
      </S.SortButtonContainer>

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

      {filteredVenues.length > 0 && filteredVenues.length === venues.length ? (
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
