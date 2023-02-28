import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import UserDetail from './pages/UserDetail/UserDetail';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import EditProduct from './pages/EditProductDetail/EditProduct';
import CreateProductDetail from './pages/CreateProductDetail/CreateProductDetail';
import Message from './pages/Message/Message';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/userdetail' element={<UserDetail />} />
        <Route path='/productdetail/:productId' element={<ProductDetail />} />
        {/* <Route path='/productdetail' element={<ProductDetail />} /> */}
        <Route path='/editProduct/:productId' element={<EditProduct />} />
        <Route path='/createProduct' element={<CreateProductDetail />} />
        <Route path='/message' element={<Message />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
