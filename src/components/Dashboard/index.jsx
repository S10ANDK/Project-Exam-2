import React from 'react';
import Container from '../styles/Container/index.styled';
import GetProfile from './GetProfile';
import { Helmet } from 'react-helmet-async';

/*
  Dashboard component
*/

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>dashboard | holidaze</title>
        <meta
          name="description"
          content="Dashboard page with all information about your profile"
        />
      </Helmet>
      <Container>
        <GetProfile />
      </Container>
    </>
  );
}

export default Dashboard;
