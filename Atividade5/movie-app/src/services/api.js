import axios from 'axios';

// Substitua 'SUA_CHAVE_DE_API_AQUI' pela sua chave de API real do TMDB.
// É fundamental para que a aplicação funcione.
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Verifica se a chave da API foi inserida.
if (API_KEY === 'SUA_CHAVE_DE_API_AQUI') {
  alert('Por favor, insira sua chave de API do TMDB no arquivo src/services/api.js');
}

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export default api;