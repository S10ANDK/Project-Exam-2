import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import venueManagerStatus from '../../../api/localStorage/venueManagerStatus';

/*
  Navigation component 
*/

const Nav = () => {
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    setActive(false);
  }, [location]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [isLoggedIn]);

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
          {isLoggedIn ? (
            <>
              {venueManagerStatus === true && (
                <S.NavListItem>
                  <S.NavLink
                    onClick={() => setActive(!active)}
                    to="/list-your-home"
                  >
                    list your home
                  </S.NavLink>
                </S.NavListItem>
              )}
              <S.NavListItemDynamic>
                <S.NavLink onClick={() => setActive(!active)} to="/dashboard">
                  dashboard
                </S.NavLink>
              </S.NavListItemDynamic>
              <S.NavBorder />
              <S.NavListItemDynamic>
                <S.NavLink
                  onClick={() => {
                    handleLogOut();
                    setActive(!active);
                  }}
                  to="/"
                >
                  log out
                </S.NavLink>
              </S.NavListItemDynamic>
            </>
          ) : (
            <>
              <S.NavBorder />
              <S.NavListItem>
                <S.NavLink onClick={() => setActive(!active)} to="/register">
                  register
                </S.NavLink>
              </S.NavListItem>
              <S.NavListItem>
                <S.NavLink
                  onClick={() => {
                    setActive(!active);
                  }}
                  to="/login"
                >
                  login
                </S.NavLink>
              </S.NavListItem>
            </>
          )}
        </S.NavList>
      </S.NavBox>
    </>
  );
};

export default Nav;
