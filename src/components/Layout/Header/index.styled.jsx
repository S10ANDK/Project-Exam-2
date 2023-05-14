import styled from 'styled-components';

export const Header = styled.header`
  background: ${(props) => props.theme.color.primary};
  top: 0;
  z-index: 10;

  &.sticky {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 1000px) {
    border-bottom: 1px solid ${(props) => props.theme.color.borders};
  }
`;

export const HeaderContentWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;

export const LogoAndNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    flex: 1;
  }
`;

export const Logo = styled.img`
  margin: 15px 20px 10px;
  width: 150px;
  cursor: pointer;

  @media (min-width: 380px) {
    width: 150px;
  }

  @media (min-width: 440px) {
    width: 170px;
  }

  @media (min-width: 1000px) {
    width: 180px;
    margin: 15px 0px 10px 30px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 15px;

  @media (min-width: 400px) {
    margin: 0px 10px 0px 20px;
  }

  @media (min-width: 600px) {
    margin: 0px 15px 0px 25px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    margin-right: 30px;
  }
`;

export const ProfileIcon = styled.img`
  margin: 10px;
  width: 35px;
  cursor: pointer;

  @media (min-width: 400px) {
    margin-right: 18px;
  }

  @media (min-width: 1000px) {
    margin-right: 10px;
  }
`;
