import React from 'react';
import ReactDOM from 'react-dom'  ;
import './Style.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
  </React.StrictMode>
 
);