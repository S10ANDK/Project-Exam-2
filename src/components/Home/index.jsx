import React, { useState } from 'react';
import DisplayVenueList from './Venues';
import * as S from './index.styled';
import FilterButtons from './FilterButtons';
import SortButtons from './SortButtons';
import Search from './Search';
import PriceFilter from './PriceFilter';
import MobileFilterButton from './MobileFilterButton';

/*
  Renders the home page with all its components
*/

function Home() {
  const [filters, setFilters] = useState([]);
  const [maxGuests, setMaxGuests] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <S.HomeContainer>
      <MobileFilterButton
        onButtonClick={() => setFiltersVisible((prev) => !prev)}
      />
      <S.SearchFiltersContainer filtersVisible={filtersVisible}>
        <Search onSearch={setSearchTerm} minLength={3} />
        <FilterButtons
          filters={filters}
          setFilters={setFilters}
          maxGuests={maxGuests}
          setMaxGuests={setMaxGuests}
          setPageIndex={setPageIndex}
        />
        <PriceFilter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        <SortButtons
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setPageIndex={setPageIndex}
        />
      </S.SearchFiltersContainer>
      <DisplayVenueList
        filters={filters}
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        maxPrice={maxPrice}
        maxGuests={maxGuests}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </S.HomeContainer>
  );
}

export default Home;
