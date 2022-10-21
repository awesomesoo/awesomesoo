import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound';
import PostList from '../../pages/post/PostListPage';
import PostItem from '../../pages/post/PostItemPage';
import PostWrite from '../../pages/post/PostWritePage';

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/postwrite' element={<PostWrite />}></Route>
      <Route path='/404' element={<NotFound />}></Route>
      <Route path='/@:username'>
        <Route index element={<PostList />}></Route>
        <Route path=':postId' element={<PostItem />}></Route>
      </Route>
      {/* 위의 것과 동일한 기능
        <Route path="/@:username" element={<PostList />}></Route>
        <Route path="/@:username/:postId" element={<PostItem />}></Route>
      */}
    </Routes>
  );
};

export default Navigation;
