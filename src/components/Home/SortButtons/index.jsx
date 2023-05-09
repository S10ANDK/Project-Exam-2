import React from 'react';
import { SortButtonContainer } from './index.styled';

/*
  Component with buttons for sorting the api based on ascending or descending created date
*/

function SortButtons({ setSortOrder }) {
  return (
    <SortButtonContainer>
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
    </SortButtonContainer>
  );
}

export default SortButtons;
