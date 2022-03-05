import {Home} from '../pages/Home';
import {About} from '../pages/About';
import React from 'react';
import FullArticle from '../pages/FullArticle';

const RouterOutlet = () => {
  const pathname = window.location.pathname;

  const routing = {
    '/': <Home />,
    '/about': <About />,
    '/login': <h1>Логин</h1>,
    '**': <h1>404 Ошибка</h1>,
  };

  const rout = (url, component) => {
    if (pathname.includes(url)) {
      const id = pathname.replace(`/${url}/`, '');
      return React.createElement(component, {id});
    }
  };

  return <>{routing[pathname] || rout('post', FullArticle) || routing['**']}</>;
};
export default RouterOutlet;
