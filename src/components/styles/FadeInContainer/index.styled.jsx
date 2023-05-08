import styled, { keyframes } from 'styled-components';
import Container from '../Container/index.styled';
import { VenueCardContainer } from '../../Home/Venues/VenueCard/index.styled';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeInContainer = styled(Container)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const VenueCardContainerFadeIn = styled(VenueCardContainer)`
  animation: ${fadeIn} 0.4s ease-in-out;
`;
