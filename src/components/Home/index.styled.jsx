import Container from '../styles/Container/index.styled';
import { FadeInContainer } from '../styles/FadeInContainer/index.styled';
import styled from 'styled-components';

export const HomeContainer = styled(Container)`
  max-width: 2100px;
`;

export const SearchFiltersContainer = styled(FadeInContainer)`
  min-height: auto;
  @media (min-width: 1000px) {
    display: block;
  }
`;
