import React from 'react';
import * as S from './index.styled';

/*
  Component for filtering venues based on maximum guests for a venue
*/

function MaxGuestsFilter({ maxGuests, setMaxGuests, setPageIndex }) {
  const handleMaxGuestsChange = (event) => {
    setMaxGuests(event.target.value);
    setPageIndex(0);
  };
  return (
    <S.MaxGuestsFilterContainer>
      <label>
        Max Guests:
        <input
          type="number"
          value={maxGuests || ''}
          onChange={handleMaxGuestsChange}
          min="1"
          max="1000"
        />
      </label>
    </S.MaxGuestsFilterContainer>
  );
}

export default MaxGuestsFilter;
