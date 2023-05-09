import React from 'react';

function PriceFilter({ minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
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
  );
}

export default PriceFilter;
