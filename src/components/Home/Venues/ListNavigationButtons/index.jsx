import React from 'react';
import * as S from './index.styled';

/* 
  Navigation buttons for navigating the venue list
*/

function ListNavigationButtons({
  pageIndex,
  setPageIndex,
  venues,
  filteredVenues,
}) {
  const handleNextClick = () => {
    setPageIndex(pageIndex + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevClick = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <S.ListButtonContainer>
      <button onClick={handlePrevClick} disabled={pageIndex === 0}>
        Prev
      </button>
      <button
        onClick={handleNextClick}
        disabled={
          pageIndex === filteredVenues.length - 1 || venues.length <= 19
        }
      >
        Next
      </button>
    </S.ListButtonContainer>
  );
}

export default ListNavigationButtons;
