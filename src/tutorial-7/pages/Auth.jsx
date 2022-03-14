import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router';

const Auth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    login: '',
    password: '',
  });

  const handleChangeInput = (event) => {
    setAuth({
      ...auth,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${auth.login}&password=${auth.password}`
    );
    if (resp.ok) {
      const {token} = await resp.json();
      window.localStorage.setItem('token', token);
      navigate('/login');
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  return (
    <Form className="login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="login"
          placeholder="Email"
          value={auth.login}
          onChange={handleChangeInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          placeholder="Пароль"
          value={auth.password}
          onChange={handleChangeInput}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Войти
      </Button>
    </Form>
  );
};

export default Auth;
