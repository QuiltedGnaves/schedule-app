import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import 'semantic-ui-css/semantic.min.css';
import ContactProvider from './providers/ContactProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApptProvider from './providers/ApptProvider';
import './index.css';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ContactProvider>
        <ApptProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApptProvider>
      </ContactProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);