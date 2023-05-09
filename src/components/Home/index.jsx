import React, { useState } from 'react';
import DisplayVenueList from './Venues';
import { HomeContainer } from './index.styled';
import FilterButtons from './FilterButtons';
import SortButtons from './SortButtons';
import Search from './Search';

/*
  Renders the home page with all its components
*/

function Home() {
  const [filters, setFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HomeContainer>
      <Search onSearch={setSearchTerm} minLength={3} />
      <FilterButtons filters={filters} setFilters={setFilters} />
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <DisplayVenueList
        filters={filters}
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </HomeContainer>
  );
}

export default Home;
