import styled from 'styled-components';

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  max-width: 300px;

  @media (min-width: 550px) {
    max-width: 400px;
  }

  @media (min-width: 1000px) {
    max-width: 500px;
  }
`;

export const AboutAndBrandAdjectivesContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: top;
  }
`;

export const AboutTextContainer = styled.div`
  width: 100%;
`;

export const AboutText = styled.p`
  margin-top: 30px;

  @media (min-width: 1000px) {
    text-align: center;
  }
`;

export const AllBrandAdjectivesContainer = styled.div`
  width: 100%;
  margin: 40px auto 60px;

  @media (min-width: 1000px) {
    text-align: center;
    margin-top: 0px;
  }
`;

export const BrandAdjectivesContainer = styled.div`
  width: 100%;
  max-width: 400px;

  text-align: left;
  margin: 30px auto;
  background: #f6f6f6;
  border-radius: 200px;
  padding: 20px 0px;

  p {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 20px;
  }
`;

export const BrandAdjectiveOne = styled.p`
  color: #8a8217;
`;

export const BrandAdjectiveTwo = styled.p`
  color: #558441;
`;

export const BrandAdjectiveThree = styled.p`
  color: #0a87b8;
`;

export const BrandAdjectiveFour = styled.p`
  color: #3b5f75;
`;

export const BrandAdjectiveFive = styled.p`
  color: #aa3fb0;
`;

export const BrandAdjectiveSix = styled.p`
  color: #d53666;
`;

export const AllColorBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px auto 40px;
`;

export const ColorBoxContainer = styled.div`
  max-width: 100px;
  width: 100%;
  margin: 20px auto;
  text-align: center;

  @media (min-width: 480px) {
    max-width: 200px;
  }

  @media (min-width: 768px) {
    max-width: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const ColorBox = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const AllTypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 1000px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const TypographyContainerOne = styled.div`
  font-family: Serenity, sans-serif;
  margin: 10px;

  h3 {
    font-size: 2rem;
  }
`;

export const TypographyContainerTwo = styled.div`
  font-family: Open Sans, sans-serif;
  margin: 10px;

  h3 {
    font-size: 1.2rem;
  }
`;

export const TypographyContainerThree = styled.div`
  margin: 10px;

  h3 {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export const StylingInfoContainer = styled.div`
  text-align: left;
  width: 100%;
  max-width: 300px;
  margin: auto;
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 20px;
  margin: 40px auto 60px;

  @media (min-width: 550px) {
    max-width: 450px;
  }

  @media (min-width: 1000px) {
    max-width: 600px;
  }

  p {
    padding: 20px;
  }
`;

export const AssetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px auto;
`;

export const Asset = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 20px;
`;
