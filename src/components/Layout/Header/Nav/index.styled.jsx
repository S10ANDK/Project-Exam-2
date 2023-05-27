import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HamburgerIcon = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  top: 15px;
  left: 20px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  div {
    background-color: #333;
    border-radius: 10px;
    width: 2rem;
    height: 0.24rem;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ active }) => (active ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ active }) =>
        active ? 'translateX(-100%)' : 'translateX(100)'};
      opacity: ${({ active }) => (active ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const NavBox = styled.nav`
  background: var(--color-accent-one);
  position: fixed;
  z-index: 100;
  color: ${(props) => props.theme.color.white};
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 25px 0px;
  transform: ${({ active }) =>
    active ? 'translateY(0%)' : 'translateY(100%)'};
  transition: 0.2s ease-in-out;
  border-radius: 15px 15px 15px 0px;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 1000px) {
    width: 100%;
    box-shadow: none;
    padding: 0;
    transition: none;
    transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(0)')};
    background-color: ${(props) => props.theme.color.primary};
    margin-top: 0;
    position: relative;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 0;

  @media (min-width: 500px) {
    text-align: left;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: right;
    margin-right: 10px;
    margin-left: 0;
  }
`;

export const NavListItem = styled.li`
  margin: 20px 0px;
  text-decoration: none;

  @media (min-width: 1000px) {
    color: ${(props) => props.theme.color.black};
    margin: 10px;
  }
`;

export const NavListItemDynamic = styled(NavListItem)`
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.white};
  padding: 15px 10px;
  font-size: 1.2rem;
  letter-spacing: 0.5px;

  :hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.color.secondary};
    text-underline-offset: 15px;
    text-decoration-thickness: 3px;
  }

  :visited {
    color: ${(props) => props.theme.color.white};
  }

  @media (min-width: 1000px) {
    font-size: 1.1rem;
    color: ${(props) => props.theme.color.black};
    padding: 15px 0px;

    :visited {
      color: ${(props) => props.theme.color.black};
    }
  }
`;

export const NavBorder = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.borders};
  margin: 30px 30px 20px 10px;

  @media (min-width: 1000px) {
    display: none;
  }
`;
