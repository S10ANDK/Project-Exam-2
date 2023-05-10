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
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  return (
    <S.HomeContainer>
      <MobileFilterButton
        setIsFiltersVisible={setIsFiltersVisible}
        isFiltersVisible={isFiltersVisible}
      />
      {isFiltersVisible && (
        <S.SearchFiltersContainer>
          <Search onSearch={setSearchTerm} minLength={3} />
          <FilterButtons filters={filters} setFilters={setFilters} />
          <PriceFilter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </S.SearchFiltersContainer>
      )}
      <DisplayVenueList
        filters={filters}
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </S.HomeContainer>
  );
}

export default Home;
