import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import UserDetail from './pages/UserDetail/UserDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='userdetail' element={<UserDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
