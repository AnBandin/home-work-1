import ReactDOM from 'react-dom';
import {StrictMode} from 'react';
import App from './tutorial-6/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tutorial-6/index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
