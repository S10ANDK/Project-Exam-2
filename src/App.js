import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout-success" element={<CheckoutSuccess />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<IndividualProduct />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
