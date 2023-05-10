import Container from '../styles/Container/index.styled';
import { FadeInContainer } from '../styles/FadeInContainer/index.styled';
import styled from 'styled-components';

export const HomeContainer = styled(Container)`
  max-width: 2100px;
`;

export const SearchFiltersContainer = styled(FadeInContainer)`
  display: block;
  min-height: auto;
  width: 100%;
  max-width: 300px;
  margin: auto;

  @media (max-width: 999px) {
    display: ${(props) => (props.filtersVisible ? 'block' : 'none')};
  }
`;
