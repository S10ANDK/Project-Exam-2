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
  margin-top: 40px;

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
  padding: 20px;

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
