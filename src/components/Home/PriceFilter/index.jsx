import React, { useState } from 'react';

function PriceFilter({ setMinPrice, setMaxPrice }) {
  const [tempMinPrice, setTempMinPrice] = useState('');
  const [tempMaxPrice, setTempMaxPrice] = useState('');

  const handleMinPriceSubmit = () => {
    setMinPrice(tempMinPrice);
  };

  const handleMaxPriceSubmit = () => {
    setMaxPrice(tempMaxPrice);
  };

  return (
    <div>
      <label>
        Min Price:
        <input
          type="number"
          value={tempMinPrice}
          onChange={(e) => setTempMinPrice(e.target.value)}
        />
        <button onClick={handleMinPriceSubmit}>Set Min Price</button>
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={tempMaxPrice}
          onChange={(e) => setTempMaxPrice(e.target.value)}
        />
        <button onClick={handleMaxPriceSubmit}>Set Max Price</button>
      </label>
    </div>
  );
}

export default PriceFilter;
