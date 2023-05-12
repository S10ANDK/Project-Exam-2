import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Container from '../styles/Container/index.styled';
import * as S from './index.styled';
import { registerProfile } from '../auth/register.js';
import { Helmet } from 'react-helmet-async';

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
        /^(.+)@(stud\.noroff\.no|noroff\.no)$/,
        'Email should be a valid stud.noroff.no or noroff.no email address'
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

const onSubmit = async (data) => {
  try {
    await registerProfile(data); // Assuming registerProfile returns a promise
    alert('Registration successful!'); // Replace this with your success message or action
  } catch (err) {
    alert('Registration failed: ' + err.message); // Replace this with your error handling
  }
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Container>
      <Helmet>
        <title>register | holidaze</title>
        <meta name="description" content="Register with Holidaze!" />
      </Helmet>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register('name')} />
        <S.FormErrorMessage>{errors.name?.message}</S.FormErrorMessage>
        <input placeholder="email" {...register('email')} />
        <S.FormErrorMessage>{errors.email?.message}</S.FormErrorMessage>
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <S.FormErrorMessage>{errors.password?.message}</S.FormErrorMessage>
        <input placeholder="avatar" {...register('avatar')} />
        <S.FormErrorMessage>{errors.avatar?.message}</S.FormErrorMessage>
        <label htmlFor="checkbox">Venue Manager:</label>
        <input
          name="venueManager"
          type="checkbox"
          {...register('venueManager')}
        />
        <S.FormErrorMessage>{errors.avatar?.message}</S.FormErrorMessage>
        <button type="submit" value="submit">
          Register
        </button>
      </S.RegisterForm>
    </Container>
  );
}

export default Register;
