import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Cria a raiz da aplicação no elemento com id 'root' do seu HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal App dentro do modo estrito do React.
// O StrictMode ajuda a identificar potenciais problemas na aplicação.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);