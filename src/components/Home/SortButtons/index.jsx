import React from 'react';
import { SortButtonContainer } from './index.styled';

/*
  Component with buttons for sorting the api based on ascending or descending created date
*/

function SortButtons({ sortOrder, setSortOrder, setPageIndex }) {
  return (
    <SortButtonContainer>
      <button
        className={sortOrder === 'asc' ? 'active' : ''}
        onClick={() => {
          setSortOrder('asc');
          setPageIndex(0);
        }}
      >
        Sort Ascending
      </button>
      <button
        className={sortOrder === 'desc' ? 'active' : ''}
        onClick={() => {
          setSortOrder('desc');
          setPageIndex(0);
        }}
      >
        Sort Descending
      </button>
    </SortButtonContainer>
  );
}

export default SortButtons;
