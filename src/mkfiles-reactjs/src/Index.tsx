// src/main.js
import { firebaseApp } from './Auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MkfilesNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';

import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MkfilesNavbar />
      <Dashboard />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
