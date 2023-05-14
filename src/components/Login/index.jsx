import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Container from '../styles/Container/index.styled';
import { loginProfile } from '../auth/login.js';
import { Helmet } from 'react-helmet-async';
import { FormErrorMessage } from '../styles/Form/index.styled';
import { StyledButtonBlue } from '../styles/Button/index.styled';
import * as S from './index.styled';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await loginProfile(data);
      if (response.ok) {
        reset();
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      setLoginError(
        'Login failed. Credentials might be wrong. Please try again. ' +
          '(Status code: ' +
          error.message +
          ')'
      );
    }
  };

  return (
    <Container>
      <Helmet>
        <title>login | holidaze</title>
        <meta name="description" content="Login with your Holidaze profile!" />
      </Helmet>
      <h1>login</h1>
      <S.LoginGreetingContainer>
        <p>
          Log in with your noroff account, and discover your next adventure with
          Holidaze!
        </p>
      </S.LoginGreetingContainer>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
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
        {loginError && <S.LoginErrorMessage>{loginError}</S.LoginErrorMessage>}
        <S.LoginButtonContainer>
          <Link to={'/register'}>
            Not yet a member? <span>Register here</span>
          </Link>
          <StyledButtonBlue type="submit">Login</StyledButtonBlue>
        </S.LoginButtonContainer>
      </S.LoginForm>
    </Container>
  );
}

export default Login;
