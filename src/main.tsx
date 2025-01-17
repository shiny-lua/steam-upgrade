import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import './index.css';
// import 'jsvectormap/dist/css/jsvectormap.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "@material-tailwind/react";
import 'react-multi-carousel/lib/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </ThemeProvider>
  // </React.StrictMode>,
);
