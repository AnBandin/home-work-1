import {Route, Routes} from 'react-router';
import {Home} from '../pages/Home';
import React from 'react';
import {About} from '../pages/About';
import FullPost from '../pages/FullPost';
import NotFound from '../pages/NotFound';

const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="about" element={<About />} />
      <Route path="login" element={<h1>Логин</h1>} />
      <Route path="post/:id" element={<FullPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default RouterOutlet;
