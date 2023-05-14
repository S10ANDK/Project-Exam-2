import styled from 'styled-components';

// Carousel and modal for images

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: center;
  margin-right: 10px;
`;

export const CarouselImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ inModal }) => (inModal ? '0' : '10px')};
  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

// ----------------------------
