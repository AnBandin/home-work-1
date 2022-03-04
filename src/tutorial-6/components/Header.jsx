import React from 'react';
import {Nav} from 'react-bootstrap';

export const Header = () => {
  return (
    <div className="header">
      <h2>React Blog</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link href="/">Главная</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">Обо мне</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Войти</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
