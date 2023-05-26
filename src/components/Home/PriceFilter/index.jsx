import React, { useState } from 'react';
import * as S from './index.styled';

/*
  Component with inputs for filtering venues based on min and max price
*/

function PriceFilter({ setMinPrice, setMaxPrice, setPageIndex }) {
  const [tempMinPrice, setTempMinPrice] = useState('');
  const [tempMaxPrice, setTempMaxPrice] = useState('');

  const handlePriceRangeSubmit = () => {
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
    setPageIndex(0);
  };

  return (
    <S.PriceFilterContainer>
      <label>
        Min Price:
        <input
          type="number"
          value={tempMinPrice}
          onChange={(e) => setTempMinPrice(e.target.value)}
          min="1"
          max="100000"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={tempMaxPrice}
          onChange={(e) => setTempMaxPrice(e.target.value)}
          min="1"
          max="100000"
        />
      </label>
      <button onClick={handlePriceRangeSubmit}>Set Price</button>
    </S.PriceFilterContainer>
  );
}

export default PriceFilter;
