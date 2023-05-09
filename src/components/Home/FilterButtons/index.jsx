import React from 'react';
import { FilterButtonContainer } from './index.styled';

/*
  Component with buttons for filtering the api results based on meta data
*/

const FilterButtons = ({
  filters,
  setFilters,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const handleFilterClick = (filter) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  return (
    <FilterButtonContainer>
      <button
        className={filters.includes('wifi') ? 'active' : ''}
        onClick={() => handleFilterClick('wifi')}
      >
        Wifi
      </button>
      <button
        className={filters.includes('parking') ? 'active' : ''}
        onClick={() => handleFilterClick('parking')}
      >
        Parking
      </button>
      <button
        className={filters.includes('breakfast') ? 'active' : ''}
        onClick={() => handleFilterClick('breakfast')}
      >
        Breakfast
      </button>
      <button
        className={filters.includes('pets') ? 'active' : ''}
        onClick={() => handleFilterClick('pets')}
      >
        Pets
      </button>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>
    </FilterButtonContainer>
  );
};

export default FilterButtons;
