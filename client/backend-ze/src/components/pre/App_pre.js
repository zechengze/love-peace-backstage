import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Tickets from './components/TicketManage/Tickets';
import Orders from './components/OrderManage/Orders';
import Charts from './components/Charts/Charts.tsx';
import Shop from './components/Shop/Shop';
import Logout from './components/Logout/Logout';

import Error from './components/Error/Error';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tickets" element={<Tickets />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/charts" element={<Charts />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;