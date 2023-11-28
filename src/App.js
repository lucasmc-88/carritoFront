// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Order from './order/pages/Order';
import Product from './product/pages/Product';
import Category from './category/pages/Category';
import OrderList from './order/components/OrderList';
import OrderAddProduct from './order/components/OrderAddProduct';
import OrderUpdate from './order/components/OrderUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/orderid" element={<Order />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/" element={<OrderList />} />
        <Route path="/orderaddproduct" element={<OrderAddProduct />} />
        <Route path="/orderupdate" element={<OrderUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
