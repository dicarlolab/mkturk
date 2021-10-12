// src/main.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MkfilesNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';

import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MkfilesNavbar />
      <Dashboard />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
