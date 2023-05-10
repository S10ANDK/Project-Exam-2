import React from 'react';
import * as S from './index.styled';

/*
    Button for displaying filters for mobile view
*/

function MobileFilterButton({ setIsFiltersVisible, isFiltersVisible }) {
  const handleClick = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <S.MobileFilterButtonContainer>
      <S.MobileFilterButton onClick={handleClick}>
        <p>{isFiltersVisible ? 'Close Filters' : 'Filters'}</p>
      </S.MobileFilterButton>
    </S.MobileFilterButtonContainer>
  );
}

export default MobileFilterButton;
