import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Register from './components/Register';
import VenueSpecific from './components/VenueSpecific';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateVenueListing from './components/venueListings/CreateVenueListing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="venues/:id" index element={<VenueSpecific />} />

        <Route path="register" index element={<Register />} />

        <Route path="login" index element={<Login />} />

        <Route path="dashboard" index element={<Dashboard />} />
        <Route path="list-your-home" index element={<CreateVenueListing />} />
      </Route>
    </Routes>
  );
}

export default App;
