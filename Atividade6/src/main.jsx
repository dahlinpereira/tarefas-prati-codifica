import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Descomente UMA das linhas abaixo para renderizar a versão desejada
//import App from './versions/01-css-global/App';
//import App from './versions/02-css-modules/App';
import App from './versions/03-tailwind/App';
//import App from './versions/04-styled-components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);