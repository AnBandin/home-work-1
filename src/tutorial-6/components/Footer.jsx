import {Container, Navbar} from 'react-bootstrap';
import React from 'react';

export const Footer = () => {
  return (
    <Navbar bg="light" variant="light" style={{margin: '20px 0'}}>
      <Container>
        <Navbar.Brand href="#home">React Blog 2022</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Archakov Dennis / Frontend Developer</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
