import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(faEye, faEyeSlash, faArrowRightFromBracket);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode> 
);

reportWebVitals();
