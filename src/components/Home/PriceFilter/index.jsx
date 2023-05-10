import React, { useState } from 'react';
import * as S from './index.styled';

function PriceFilter({ setMinPrice, setMaxPrice }) {
  const [tempMinPrice, setTempMinPrice] = useState('');
  const [tempMaxPrice, setTempMaxPrice] = useState('');

  const handlePriceRangeSubmit = () => {
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
  };

  return (
    <S.PriceFilterContainer>
      <label>
        Min Price:
        <input
          type="number"
          value={tempMinPrice}
          onChange={(e) => setTempMinPrice(e.target.value)}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={tempMaxPrice}
          onChange={(e) => setTempMaxPrice(e.target.value)}
        />
      </label>
      <button onClick={handlePriceRangeSubmit}>Set Price Range</button>
    </S.PriceFilterContainer>
  );
}

export default PriceFilter;
