import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Seccion3 from './Seccion3';
import Seccion4 from './Seccion4.js';
import Foter from './Foter.js';
import Carrito from './Carrito.js';

import Buscador from './Buscador.js';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


<Carrito/>

 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
