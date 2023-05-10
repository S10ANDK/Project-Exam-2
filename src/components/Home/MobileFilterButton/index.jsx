import React, { useState } from 'react';
import * as S from './index.styled';

/*
    Button for displaying filters for mobile view
*/

function MobileFilterButton({ onButtonClick }) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleClick = () => {
    setIsFiltersVisible(!isFiltersVisible);
    onButtonClick();
  };

  return (
    <S.MobileFilterButtonContainer>
      <S.MobileFilterButton onClick={handleClick}>
        {isFiltersVisible ? '▲ Close Filters' : '▼ Filters'}
      </S.MobileFilterButton>
    </S.MobileFilterButtonContainer>
  );
}

export default MobileFilterButton;
