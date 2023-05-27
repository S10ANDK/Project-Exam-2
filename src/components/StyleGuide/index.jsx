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
import UserIcon from '../../assets/user.png';
import RatingIcon from '../../assets/starblue.png';
import PlaceHolderImage from '../../assets/placeholderImage.png';
import LocationIcon from '../../assets/location.png';
import ProfileIcon from '../../assets/profile.png';

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
            <h2>about holidaze</h2>
            <S.AboutText>
              Holidaze is your go-to online platform for distinctive bed and
              breakfast rentals worldwide. We connect travelers with unique
              accommodations, fostering memorable experiences in diverse
              destinations. Explore, compare, and secure the perfect stay with
              Holidaze - your trusted partner in extraordinary vacations.
            </S.AboutText>
          </S.AboutTextContainer>
          <S.AllBrandAdjectivesContainer>
            <h2>brand adjectives</h2>
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

        <h2>color theme palette</h2>
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

        <h2>typography</h2>
        <S.AllTypographyContainer>
          <S.TypographyContainerOne>
            <h3>this is an example of a header</h3>
            <p>Serenity</p>
          </S.TypographyContainerOne>
          <S.TypographyContainerTwo>
            <h3>this is an example of a header</h3>
            <p>Open Sans</p>
          </S.TypographyContainerTwo>
          <S.TypographyContainerThree>
            <h3>this is an example of body text</h3>
            <p>Open Sans</p>
          </S.TypographyContainerThree>
        </S.AllTypographyContainer>
        <S.StylingInfoContainer>
          <p>
            In keeping with our unique aesthetic and branding style, Holidaze
            maintains a distinctive lowercase typography approach for most
            headings, buttons, and links, in harmony with our uppercase logo.
            This design decision underlines our commitment to creating a
            cohesive, inviting, and easily recognizable visual experience across
            our platform.
          </p>
        </S.StylingInfoContainer>
        <h2>assets</h2>
        <S.AssetsContainer>
          <S.Asset src={UserIcon} alt="user icon asset" />
          <S.Asset src={RatingIcon} alt="rating icon asset" />
          <S.Asset src={ProfileIcon} alt="profile icon asset" />
          <S.Asset src={LocationIcon} alt="location icon asset" />
          <S.Asset src={PlaceHolderImage} alt="placeholder image asset" />
        </S.AssetsContainer>
      </Container>
    </>
  );
}

export default StyleGuide;
