import React, {useEffect, useState} from 'react';
import {Button, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router';
import {routs} from '../routs';

export const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [pathname]);

  const switchAuth = () => {
    if (token) {
      window.localStorage.removeItem('token');
      navigate('/');
      setAuth(false);
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="header">
      <h2>React Blog</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/"
            className={pathname === routs.home && 'active'}
          >
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/about"
            className={pathname.includes(routs.about) && 'active'}
          >
            Обо мне
          </Nav.Link>
        </Nav.Item>
        {
          <Nav.Item>
            <Button variant={isAuth ? 'danger' : 'link'} onClick={switchAuth}>
              {isAuth ? 'Выйти' : 'Авторизироваться'}
            </Button>
          </Nav.Item>
        }
      </Nav>
    </div>
  );
};
