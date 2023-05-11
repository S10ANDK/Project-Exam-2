import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Register from './components/Register';
import RegisterVenueManager from './components/RegisterVenueManager';
import VenueSpecific from './components/VenueSpecific';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="venues/:id" index element={<VenueSpecific />} />

        <Route path="register" index element={<Register />} />

        <Route
          path="register-venue-manager"
          index
          element={<RegisterVenueManager />}
        />
      </Route>
    </Routes>
  );
}

export default App;
