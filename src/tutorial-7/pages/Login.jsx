import {Navigate} from 'react-router';

const Login = () => {
  const token = window.localStorage.getItem('token');
  if (token) {
    return <h1>Hello user</h1>;
  } else {
    return <Navigate to={'/'} />;
  }
};

export default Login;
