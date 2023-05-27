import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as S from './index.styled';
import Container from '../styles/Container/index.styled';
import Logo from '../../assets/style-guide/logo-big.png';

/*
  Style Guide component
*/

function StyleGuide() {
  return (
    <>
      <Helmet>
        <title>style guide | holidaze</title>
        <meta name="description" content="A style guide for Holidaze!" />
      </Helmet>
      <Container>
        <h1>Style Guide</h1>
        <S.LogoContainer>
          <S.Logo src={Logo} />
        </S.LogoContainer>
        <S.AboutAndBrandAdjectivesContainer>
          <S.AboutTextContainer>
            <h2>About Holidaze</h2>
            <S.AboutText>
              Holidaze is your go-to online platform for distinctive bed and
              breakfast rentals worldwide. We connect travelers with unique
              accommodations, fostering memorable experiences in diverse
              destinations. Explore, compare, and secure the perfect stay with
              Holidaze - your trusted partner in extraordinary vacations.
            </S.AboutText>
          </S.AboutTextContainer>
          <S.AllBrandAdjectivesContainer>
            <h2>Brand Adjectives</h2>
            <S.BrandAdjectivesContainer>
              <S.BrandAdjectiveOne>Adventurous</S.BrandAdjectiveOne>
              <S.BrandAdjectiveTwo>Inviting</S.BrandAdjectiveTwo>
            </S.BrandAdjectivesContainer>
            <S.BrandAdjectivesContainer>
              <S.BrandAdjectiveThree>Approchable</S.BrandAdjectiveThree>
              <S.BrandAdjectiveFour>Trustworthy</S.BrandAdjectiveFour>
            </S.BrandAdjectivesContainer>
            <S.BrandAdjectivesContainer>
              <S.BrandAdjectiveFive>Charming</S.BrandAdjectiveFive>
              <S.BrandAdjectiveSix>Heart-felt</S.BrandAdjectiveSix>
            </S.BrandAdjectivesContainer>
          </S.AllBrandAdjectivesContainer>
        </S.AboutAndBrandAdjectivesContainer>
      </Container>
    </>
  );
}

export default StyleGuide;
