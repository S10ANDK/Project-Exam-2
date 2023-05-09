import React, { useEffect, useState } from 'react';
import * as urls from '../../constants/urls';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import NoVenuesMessage from '../../messages/NoVenuesMessage';
import VenueCard from './VenueCard';
import * as S from '../Venues/index.styled';
import ListNavigationButtons from './ListNavigationButtons';

/* 
    Function for fetching and displaying venues 
*/

function DisplayVenueList({
  filters,
  sortOrder,
  searchTerm,
  minPrice,
  maxPrice,
}) {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

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

        if (minPrice !== '') {
          results = results.filter((venue) => venue.price >= minPrice);
        }

        if (maxPrice !== '') {
          results = results.filter((venue) => venue.price <= maxPrice);
        }

        setVenues(results);
        setFilteredVenues(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getVenues();
  }, [pageIndex, sortOrder, filters, minPrice, maxPrice]);

  useEffect(() => {
    const filtered = venues.filter(
      (venue) =>
        venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        venue.location.country
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        venue.location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVenues(filtered);
  }, [searchTerm, venues]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (venues.length <= 0) {
    return <NoVenuesMessage />;
  }

  return (
    <>
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
        <ListNavigationButtons
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          venues={venues}
          filteredVenues={filteredVenues}
        />
      ) : null}
    </>
  );
}

export default DisplayVenueList;
