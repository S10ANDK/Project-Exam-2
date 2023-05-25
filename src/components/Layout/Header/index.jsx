import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/index.jsx';
import * as S from './index.styled';
import Logo from '../../../assets/logo.png';
import Profile from '../../../assets/profile.png';

/*
  Header component
*/

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [isLoggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      const scrollToOptions = {
        top: 0,
        behavior: 'smooth',
      };
      window.scrollTo(scrollToOptions);
    }
  };

  return (
    <>
      <S.Header className={isSticky ? 'sticky' : ''}>
        <S.HeaderContentWrapper>
          <S.LogoAndNavWrapper>
            <S.NavWrapper>
              <Nav />
            </S.NavWrapper>
            <Link to={'/'}>
              <S.Logo src={Logo} alt="Logo" onClick={handleLogoClick} />
            </Link>
          </S.LogoAndNavWrapper>
          <S.ProfileWrapper>
            {isLoggedIn ? (
              <Link to={'/dashboard'}>
                <S.ProfileIcon src={Profile} />
              </Link>
            ) : (
              <Link to={'/login'}>
                <S.ProfileIcon src={Profile} />
              </Link>
            )}
          </S.ProfileWrapper>
        </S.HeaderContentWrapper>
      </S.Header>
    </>
  );
}

export default Header;
