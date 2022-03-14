import Layout from './pages/Layout';
import {Route, Routes} from 'react-router';
import {routs} from './routs';
import {Home} from './pages/Home';
import {About} from './pages/About';
import Auth from './pages/Auth';
import FullPost from './pages/FullPost';
import NotFound from './pages/NotFound';
import React from 'react';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path={routs.home} element={<Layout />}>
        <Route path={routs.home} element={<Home />} />
        <Route path={routs.about} element={<About />} />
        <Route path={routs.auth} element={<Auth />} />
        <Route path={routs.login} element={<Login />} />
        <Route path={routs.posts} element={<FullPost />} />
        <Route path={routs.default} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
