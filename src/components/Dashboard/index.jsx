import React from 'react';
import Container from '../styles/Container/index.styled';
import GetProfile from './GetProfile';
import { Helmet } from 'react-helmet-async';

/*
  Dashboard component
*/

function Dashboard() {
  return (
    <Container>
      <Helmet>
        <title>Dashboard | holidaze</title>
        <meta
          name="description"
          content="Dashboard page with all information about your profile"
        />
      </Helmet>
      <GetProfile />
    </Container>
  );
}

export default Dashboard;
