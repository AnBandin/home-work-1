import ReactDOM from 'react-dom';
import {StrictMode} from 'react';
import App from './tutorial-8/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tutorial-8/styles.css';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
