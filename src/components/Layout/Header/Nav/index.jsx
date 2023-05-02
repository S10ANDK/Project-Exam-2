import React, { useState } from 'react';
import * as S from './index.styled';

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <S.HamburgerIcon active={active} onClick={() => setActive(!active)}>
        <div />
        <div />
        <div />
      </S.HamburgerIcon>
      <S.NavBox active={active}>
        <S.NavList>
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/">
              browse
            </S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/contact">
              list your home
            </S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/contact">
              become a venue manager
            </S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/contact">
              dashboard
            </S.NavLink>
          </S.NavListItem>
          <S.NavBorder />
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/contact">
              register
            </S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/contact">
              login
            </S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink onClick={() => setActive(!active)} to="/contact">
              log out
            </S.NavLink>
          </S.NavListItem>
        </S.NavList>
      </S.NavBox>
    </>
  );
};

export default Nav;
