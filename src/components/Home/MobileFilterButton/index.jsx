import React from 'react';
import * as S from './index.styled';

/*
    Button for displaying filters for mobile view
*/

function MobileFilterButton({ onButtonClick }) {
  // const handleClick = () => {
  //   setIsFiltersVisible(!isFiltersVisible);
  // };

  return (
    <S.MobileFilterButtonContainer>
      <S.MobileFilterButton onClick={onButtonClick}>
        <p>Filters</p>
      </S.MobileFilterButton>
    </S.MobileFilterButtonContainer>
  );
}

export default MobileFilterButton;
