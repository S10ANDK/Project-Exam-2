import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Container from '../styles/Container/index.styled';
import * as S from './index.styled';
import { loginProfile } from '../auth/login.js';
import { Helmet } from 'react-helmet-async';
import { FormErrorMessage } from '../styles/FormErrorMessage/index.styled.jsx';

const schema = yup
  .object({
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
  })
  .required();

function Login() {
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
      await loginProfile(data);
      reset();
      alert('Login successful!');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>login | holidaze</title>
        <meta name="description" content="Login with your Holidaze profile!" />
      </Helmet>
      <h1>Login</h1>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email')} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        <button type="submit" value="submit">
          Login
        </button>
      </S.LoginForm>
    </Container>
  );
}

export default Login;
