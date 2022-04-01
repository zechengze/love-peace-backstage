import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import 'boxicons/css/boxicons.min.css';

import Tickets from './pages/Tickets/Tickets';
import Orders from './pages/ShopOrders/Orders';
import Charts from './pages/Charts/Charts.tsx';
import Shop from './pages/Shop/Shop';
import Logout from './pages/Logout/Logout';

import MainLayout from './components/MainLayout/MainLayout';

import Staff from './pages/Login/staff';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Staff />} />
          <Route path='/' element={<MainLayout />}>
            <Route exact path="/tickets" element={<Tickets />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/charts" element={<Charts />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;