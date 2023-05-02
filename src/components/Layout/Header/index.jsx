import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/index.jsx';
import * as S from './index.styled';
import Logo from '../../../assets/logo.png';
import Profile from '../../../assets/profile.png';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <S.Header className={isSticky ? 'sticky' : ''}>
        <S.HeaderContentWrapper>
          <S.LogoAndNavWrapper>
            <S.NavWrapper>
              <Nav />
            </S.NavWrapper>
            <Link to={'/'}>
              <S.Logo src={Logo} alt="Logo" />
            </Link>
          </S.LogoAndNavWrapper>
          <S.ProfileWrapper>
            <Link to={'/profile'}>
              <S.ProfileIcon src={Profile} />
            </Link>
          </S.ProfileWrapper>
        </S.HeaderContentWrapper>
      </S.Header>
    </>
  );
}

export default Header;
