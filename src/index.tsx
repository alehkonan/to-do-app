import { ScopedCssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
