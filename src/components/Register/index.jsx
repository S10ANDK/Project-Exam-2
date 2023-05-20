import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Container from '../styles/Container/index.styled';
import { registerProfile } from '../auth/register.js';
import { Helmet } from 'react-helmet-async';
import { FormErrorMessage } from '../styles/Form/index.styled';
import { StyledButtonRed } from '../styles/Button/index.styled';
import * as S from './index.styled';
import { Link, useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    name: yup
      .string()
      .trim()
      .matches(
        /^[A-Za-z0-9_]+$/,
        'Name should only contain alphanumeric characters and underscore'
      )
      .required('Name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .trim()
      .matches(
        /^(.+)@(stud\.noroff\.no)$/,
        'Email should be a valid stud.noroff.no email address'
      )
      .required('Email is required'),
    password: yup
      .string()
      .trim()
      .min(8, 'Password should be at least 8 characters')
      .required('Password is required'),
    avatar: yup.string().trim().url('Avatar should be a valid URL'),
    venueManager: yup.boolean(),
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await registerProfile(data);
      if (response.ok) {
        reset();
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      setRegistrationError(
        'Registration failed. Please try again. ' +
          '(Status code: ' +
          error.message +
          ')'
      );
    }
  };

  return (
    <Container>
      <Helmet>
        <title>register | holidaze</title>
        <meta name="description" content="Register with Holidaze!" />
      </Helmet>
      <h1>register</h1>

      {registrationSuccess ? (
        <S.RegistrationSuccessMessage>
          Registration successful! Redirecting to the login page...
        </S.RegistrationSuccessMessage>
      ) : (
        <>
          <S.RegisterMessage>
            Join our community to discover unique spaces around the world, or
            share your own. Register today and embark on your next unforgettable
            journey with Holidaze!
          </S.RegisterMessage>
          <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>name</label>
              <input placeholder="name" {...register('name')} />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              <label>email</label>
              <input placeholder="email" {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              <label>password</label>
              <input
                type="password"
                placeholder="password"
                {...register('password')}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              <label>avatar</label>
              <input placeholder="avatar (url)" {...register('avatar')} />
              <FormErrorMessage>{errors.avatar?.message}</FormErrorMessage>
            </div>
            <div>
              <S.VenueManagerSelectionContainer>
                <p>
                  To publish your own venues as a venue manager, check the
                  checkbox below. Unleash your creativity and share your unique
                  spaces with the world!
                </p>
                <div>
                  <label htmlFor="checkbox">Become a venue manager:</label>
                  <input
                    name="venueManager"
                    type="checkbox"
                    {...register('venueManager')}
                  />
                </div>
              </S.VenueManagerSelectionContainer>
              {registrationError && (
                <S.RegistrationErrorMessage>
                  {registrationError}
                </S.RegistrationErrorMessage>
              )}
              <S.RegisterButtonContainer>
                <Link to={'/login'}>
                  Already a member of Holidaze? <span>Login here</span>
                </Link>
                <StyledButtonRed type="submit">Register</StyledButtonRed>
              </S.RegisterButtonContainer>
            </div>
          </S.RegisterForm>
        </>
      )}
    </Container>
  );
}

export default Register;
