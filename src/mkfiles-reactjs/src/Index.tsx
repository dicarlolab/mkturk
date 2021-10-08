// src/main.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import FirstComponent from './components/FirstComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <App />
    <FirstComponent />
  </div>,

  document.getElementById('app')
);
