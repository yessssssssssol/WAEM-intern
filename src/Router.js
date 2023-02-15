import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import UserDetail from './pages/UserDetail/UserDetail';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import EditProductDetail from './pages/EditProductDetail/EditProductDetail';
import CreateProductDetail from './pages/CreateProductDetail/CreateProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/userdetail' element={<UserDetail />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/editProduct' element={<EditProductDetail />} />
        <Route path='/createProduct' element={<CreateProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
