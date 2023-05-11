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
  max-width: 300px !important;
  margin: auto;

  @media (min-width: 630px) {
    max-width: 1400px !important;
  }

  @media (max-width: 999px) {
    display: ${(props) => (props.filtersVisible ? 'block' : 'none')};
  }

  @media (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border-bottom: 1px solid ${(props) => props.theme.color.borders};
    padding-bottom: 20px;
  }

  & > div:nth-child(1) {
    @media (min-width: 1400px) {
      display: flex;
      flex-direction: column;
      justify-content: right;
    }
  }

  & > div:nth-child(2) {
    @media (min-width: 630px) {
      display: flex;
      justify-content: center;
    }
  }
`;
