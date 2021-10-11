// src/main.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MkfilesNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <>
    <MkfilesNavbar />
    <Dashboard />
  </>,

  document.getElementById('app')
);
