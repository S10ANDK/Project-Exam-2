import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Container from '../styles/Container/index.styled';
import { registerProfile } from '../auth/register.js';
import { Helmet } from 'react-helmet-async';
import { Form, FormErrorMessage } from '../styles/Form/index.styled';

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

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await registerProfile(data);
      reset();
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed: ' + err.message);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>register | holidaze</title>
        <meta name="description" content="Register with Holidaze!" />
      </Helmet>
      <h1>register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register('name')} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        <input placeholder="email" {...register('email')} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        <input placeholder="avatar" {...register('avatar')} />
        <FormErrorMessage>{errors.avatar?.message}</FormErrorMessage>
        <label htmlFor="checkbox">Venue Manager:</label>
        <input
          name="venueManager"
          type="checkbox"
          {...register('venueManager')}
        />
        <button type="submit" value="submit">
          Register
        </button>
      </Form>
    </Container>
  );
}

export default Register;
