import React from 'react';
import Container from '../../styles/Container/index.styled';
import * as S from './index.styled';
import { Helmet } from 'react-helmet-async';
import PlusIcon from '../../../assets/add.png';
import submitVenue from '../../api/submitVenue';
import listingSchema from '../validationSchema';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function CreateVenueListing() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(listingSchema),
    defaultValues: {
      name: '',
      description: '',
      media: [],
      price: 0,
      maxGuests: 0,
      rating: 0,
      meta: {
        wifi: false,
        parking: false,
        breakfast: false,
        pets: false,
      },
      location: {
        address: 'Unknown',
        city: 'Unknown',
        zip: 'Unknown',
        country: 'Unknown',
        continent: 'Unknown',
        lat: 0,
        lng: 0,
      },
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'media',
  });

  const onSubmit = async (data) => {
    console.log('Submitted data:', data);
    try {
      const response = await submitVenue(data);
      console.log('Response:', response);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  console.log('Form errors:', errors);

  return (
    <>
      <Helmet>
        <title>list your home | holidaze</title>
        <meta name="description" content="List your home on Holidaze" />
      </Helmet>

      <Container>
        <h1>List your home</h1>
        <S.ListVenueForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">name</label>
            <input name="name" type="text" {...register('name')} />
            {errors?.name && <p>{errors.name.message}</p>}

            <label htmlFor="description">description</label>
            <textarea
              name="description"
              type="text"
              rows="5"
              cols="3"
              {...register('description')}
            />
            <p>{errors?.description?.message}</p>

            <p>Add images (click the + button to add urls)</p>

            {fields.map((field, index) => (
              <div key={field.id}>
                <input
                  name={`media.${index}`}
                  type="url"
                  placeholder="url"
                  defaultValue=""
                  required
                  {...register(`media.${index}`)}
                />
                {errors.media && errors.media[index] && (
                  <p>{errors?.media[index]?.message}</p>
                )}
              </div>
            ))}

            <S.AddMoreMediaButton
              onClick={(e) => {
                e.preventDefault();
                append('');
              }}
            >
              <img src={PlusIcon} alt="add more media" />
            </S.AddMoreMediaButton>

            <label htmlFor="price">price</label>
            <input name="price" type="number" {...register('price')} />
            {errors.price && errors.price.message && (
              <p>{errors.price.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="maxGuests">maximum guests</label>
            <input name="maxGuests" type="number" {...register('maxGuests')} />

            <label htmlFor="rating">rating</label>
            <input
              name="rating"
              type="number"
              defaultValue={0}
              max={5}
              {...register('rating')}
            />
            {errors.rating && errors.rating.message && (
              <p>{errors.rating.message}</p>
            )}
          </div>
          <S.CheckboxWrapper>
            <S.CheckboxContainer>
              <label htmlFor="meta.breakfast">breakfast</label>
              <input
                name="meta.breakfast"
                type="checkbox"
                {...register('meta.breakfast')}
              />
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <label htmlFor="meta.parking">parking</label>
              <input
                name="meta.parking"
                type="checkbox"
                {...register('meta.parking')}
              />
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <label htmlFor="meta.pets">pets</label>
              <input
                name="meta.pets"
                type="checkbox"
                {...register('meta.pets')}
              />
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <label htmlFor="meta.wifi">wifi</label>
              <input
                name="meta.wifi"
                type="checkbox"
                {...register('meta.wifi')}
              />
            </S.CheckboxContainer>
          </S.CheckboxWrapper>
          <S.LocationHeading>location (optional)</S.LocationHeading>
          <div>
            <label htmlFor="location.address">address</label>
            <input
              name="location.address"
              type="text"
              {...register('location.address')}
            />

            <label htmlFor="location.city">city</label>
            <input
              name="location.city"
              type="text"
              {...register('location.city')}
            />

            <label htmlFor="location.zip">zip</label>
            <input
              name="location.zip"
              type="text"
              {...register('location.zip')}
            />
          </div>
          <div>
            <label htmlFor="location.country">country</label>
            <input
              name="location.country"
              type="text"
              {...register('location.country')}
            />

            <label htmlFor="location.continent">continent</label>
            <input
              name="location.continent"
              type="text"
              {...register('location.continent')}
            />
          </div>
          <S.PublishButton type="submit">publish</S.PublishButton>
        </S.ListVenueForm>
      </Container>
    </>
  );
}

export default CreateVenueListing;
