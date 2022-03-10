import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      setSeconds(3);
    };
  }, []);

  return (
    <>
      <h1>404 Ошибка</h1>
      <p>Вы вернетесь на главную страницу, через - {seconds}</p>
    </>
  );
};
export default NotFound;
