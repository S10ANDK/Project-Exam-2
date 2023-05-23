import React from 'react';
import Container from '../../styles/Container/index.styled';
import * as S from './index.styled';
import { StyledButtonRed } from '../../styles/Button/index.styled';
import { Helmet } from 'react-helmet-async';

function CreateVenueListing() {
  return (
    <>
      <Helmet>
        <title>list your home | holidaze</title>
        <meta name="description" content="List your home on Holidaze" />
      </Helmet>

      <Container>
        <h1>List your home</h1>
        <S.ListVenueForm>
          <div>
            <label htmlFor="name">name</label>
            <input name="name" type="text" />

            <label htmlFor="description">description</label>
            <textarea name="description" type="text" rows="5" cols="3" />

            <label htmlFor="media">media</label>
            <input name="media" type="url" />

            <label htmlFor="price">price</label>
            <input name="price" type="number" />
          </div>

          <div>
            <label htmlFor="max-guests">maximum guests</label>
            <input name="max-guests" type="number" />

            <label htmlFor="rating">rating</label>
            <input name="rating" type="number" />
          </div>
          <div>
            <S.CheckboxContainer>
              <label htmlFor="breakfast">breakfast</label>
              <input name="breakfast" type="checkbox" />
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <label htmlFor="parking">parking</label>
              <input name="parking" type="checkbox" />
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <label htmlFor="pets">pets</label>
              <input name="pets" type="checkbox" />
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <label htmlFor="wifi">wifi</label>
              <input name="wifi" type="checkbox" />
            </S.CheckboxContainer>
          </div>
          <p>location (optional)</p>
          <div>
            <label htmlFor="address">address</label>
            <input name="address" type="text" />

            <label htmlFor="city">city</label>
            <input name="city" type="text" />

            <label htmlFor="zip">zip</label>
            <input name="zip" type="text" />
          </div>
          <div>
            <label htmlFor="country">country</label>
            <input name="country" type="text" />

            <label htmlFor="continent">continent</label>
            <input name="continent" type="text" />
          </div>
          <StyledButtonRed>publish</StyledButtonRed>
        </S.ListVenueForm>
      </Container>
    </>
  );
}

export default CreateVenueListing;
