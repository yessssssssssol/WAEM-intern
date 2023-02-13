import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';
import Register from './pages/Register/Register';
import UserDetail from './pages/UserDetail/UserDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='userdetail' element={<UserDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
