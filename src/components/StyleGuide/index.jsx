import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as S from './index.styled';
import Container from '../styles/Container/index.styled';
import Logo from '../../assets/style-guide/logo-big.png';
import RedBox from '../../assets/style-guide/red.png';
import BlueBox from '../../assets/style-guide/blue.png';
import LightBlueBox from '../../assets/style-guide/light-blue.png';
import BrownBox from '../../assets/style-guide/brown.png';
import GreyBox from '../../assets/style-guide/grey.png';

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
        <h2>Color Theme Palette</h2>
        <S.AllColorBoxesContainer>
          <S.ColorBoxContainer>
            <S.ColorBox src={RedBox} alt="Red color" />
            <p>RGB: 217, 65, 93</p>
            <p>Hex: #D9415D</p>
          </S.ColorBoxContainer>
          <S.ColorBoxContainer>
            <S.ColorBox src={BlueBox} alt="Blue color" />
            <p>RGB: 59, 95, 117</p>
            <p>Hex: #3B5F75</p>
          </S.ColorBoxContainer>
          <S.ColorBoxContainer>
            <S.ColorBox src={LightBlueBox} alt="Light blue color" />
            <p>RGB: 107, 167, 191</p>
            <p>Hex: #6BA7BF</p>
          </S.ColorBoxContainer>
          <S.ColorBoxContainer>
            <S.ColorBox src={BrownBox} alt="Brown color" />
            <p>RGB: 140, 61, 43</p>
            <p>Hex: #8C3D2B</p>
          </S.ColorBoxContainer>
          <S.ColorBoxContainer>
            <S.ColorBox src={GreyBox} alt="Grey color" />
            <p>RGB: 242, 242, 242</p>
            <p>Hex: #F2F2F2</p>
          </S.ColorBoxContainer>
        </S.AllColorBoxesContainer>
      </Container>
    </>
  );
}

export default StyleGuide;
