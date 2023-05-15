import styled from 'styled-components';

// Carousel and modal for images

export const ImageContainer = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 210px;
  object-fit: cover;
  border-radius: ${({ isFirst }) => (isFirst ? '10px' : '0')};
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ isFirst }) =>
      isFirst ? '0px 0px 20px rgba(0, 0, 0, 0.3)' : 'none'};
  }

  @media (min-width: 500px) {
    width: 440px;
    height: 320px;
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 370px;
  }
`;

export const MoreImagesIndicator = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
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
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #555;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalCloseIcon = styled.img`
  background-color: white;
  border-bottom-right-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

// ----------------------------
