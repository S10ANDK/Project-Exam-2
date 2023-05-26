import React, { useState, useEffect } from 'react';
import { API_URL, API_VENUES } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import * as S from './index.styled';
import { Helmet } from 'react-helmet-async';
import PlusIcon from '../../../assets/add.png';
import DeleteIcon from '../../../assets/delete.png';
import updateVenue from '../../api/updateVenue';
import listingSchema from '../validationSchema';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../messages/ErrorMessage';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import deleteVenue from '../../api/deleteVenue';

/*
  Component for updating a venue, submitting and handling form data
*/

function UpdateVenueListing() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const defaultVenueValues = {
    name: '',
    description: '',
    media: [],
    price: 0,
    maxGuests: 1,
    rating: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },
    location: {
      address: '',
      city: '',
      zip: '',
      country: '',
      continent: '',
      lat: 0,
      lng: 0,
    },
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(listingSchema),
    defaultValues: defaultVenueValues,
  });

  useEffect(() => {
    if (venue) {
      reset(venue);
    } else {
      reset(defaultVenueValues);
    }
  }, [venue, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'media',
  });

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_VENUES}/${id}?_bookings=true&_owner=true`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch venue');
        }
        const data = await response.json();
        console.log(data);

        setVenue(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  const handleDelete = async () => {
    try {
      await deleteVenue(id);
      navigate('/');
    } catch (error) {
      console.error('Deletion error:', error);
    }
  };

  const onSubmit = async (data) => {
    console.log('Submitted data:', data);

    for (let key in data.location) {
      if (data.location[key] === '') {
        data.location[key] = 'Unknown';
      }
    }

    try {
      const response = await updateVenue(id, data);
      console.log('Response:', response);
      navigate(`/venues/${response.id}`);
    } catch (error) {
      console.log('Submission error:', error);
    }
  };

  console.log('Form errors:', errors);

  return (
    <>
      <Helmet>
        <title>list your home | holidaze</title>
        <meta name="description" content="List your home on Holidaze" />
      </Helmet>

      <S.ListVenueContainer>
        <h1>Update your venue</h1>
        <S.ListVenueForm onSubmit={handleSubmit(onSubmit)}>
          <S.FormDivOne>
            <label htmlFor="name">name</label>
            <input name="name" type="text" {...register('name')} />
            {errors?.name && (
              <S.FormErrorMessage>{errors.name.message}</S.FormErrorMessage>
            )}

            <label htmlFor="description">description</label>
            <textarea
              name="description"
              type="text"
              rows="5"
              cols="3"
              {...register('description')}
            />
            <S.FormErrorMessage>
              {errors?.description?.message}
            </S.FormErrorMessage>

            <S.AddMoreImagesHeading>Add images:</S.AddMoreImagesHeading>

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
                  <S.FormErrorMessage>
                    {errors?.media[index]?.message}
                  </S.FormErrorMessage>
                )}
                {index === fields.length - 1 && (
                  <S.RemoveMediaButtonContainer>
                    <S.RemoveMediaButton onClick={() => remove(index)}>
                      <img src={DeleteIcon} alt="delete input" />
                    </S.RemoveMediaButton>
                  </S.RemoveMediaButtonContainer>
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
            <input name="price" type="number" min={0} {...register('price')} />
            {errors.price && errors.price.message && (
              <S.FormErrorMessage>{errors.price.message}</S.FormErrorMessage>
            )}
          </S.FormDivOne>

          <S.FormDivTwo>
            <label htmlFor="maxGuests">maximum guests</label>
            <input
              name="maxGuests"
              type="number"
              min={0}
              {...register('maxGuests')}
            />

            <label htmlFor="rating">rating</label>
            <input
              name="rating"
              type="number"
              defaultValue={0}
              min={0}
              max={5}
              {...register('rating')}
            />
            {errors.rating && errors.rating.message && (
              <p>{errors.rating.message}</p>
            )}
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
          </S.FormDivTwo>
          <S.LocationHeading>location (optional)</S.LocationHeading>
          <S.FormDivThree>
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
          </S.FormDivThree>
          <S.FormDivFour>
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
          </S.FormDivFour>
          <S.ButtonsContainer>
            <S.UpdateButton type="submit">update</S.UpdateButton>
            <S.DeleteButton type="button" onClick={handleDelete}>
              delete
            </S.DeleteButton>
          </S.ButtonsContainer>
        </S.ListVenueForm>
      </S.ListVenueContainer>
    </>
  );
}

export default UpdateVenueListing;
