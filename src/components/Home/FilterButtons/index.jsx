import React from 'react';
import { FilterButtonContainer } from './index.styled';

/*
  Component with buttons for filtering the api results based on meta data
*/

const FilterButtons = ({ filters, setFilters, maxGuests, setMaxGuests }) => {
  const handleFilterClick = (filter) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const handleMaxGuestsChange = (event) => {
    setMaxGuests(event.target.value);
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
      <label>Max Guests:</label>
      <input
        type="number"
        value={maxGuests || ''}
        onChange={handleMaxGuestsChange}
      />
    </FilterButtonContainer>
  );
};

export default FilterButtons;
