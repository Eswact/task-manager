import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
