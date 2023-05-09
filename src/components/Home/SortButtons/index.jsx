import React from 'react';
import { SortButtonContainer } from './index.styled';

function SortButtons({ setSortOrder }) {
  return (
    <SortButtonContainer>
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
    </SortButtonContainer>
  );
}

export default SortButtons;
