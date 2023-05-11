import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Register from './components/Register';
import RegisterVenueManager from './components/RegisterVenueManager';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/register" element={<Layout />}>
        <Route index element={<Register />} />
      </Route>
      <Route path="/register-venue-manager" element={<Layout />}>
        <Route index element={<RegisterVenueManager />} />
      </Route>
    </Routes>
  );
}

export default App;
