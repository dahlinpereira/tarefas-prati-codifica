import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação dos componentes de página e layout
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

// Importação do arquivo de estilos global
import './assets/styles.css';

function App() {
  return (
    <Router>
      {/* O Navbar fica fora do Routes para ser exibido em todas as páginas */}
      <Navbar />
      
      {/* O container ajuda a centralizar e limitar a largura do conteúdo */}
      <main className="container">
        <Routes>
          {/* Rota da página inicial (Busca) */}
          <Route path="/" element={<Search />} />
          
          {/* Rota dinâmica para a página de detalhes de um filme. 
              O ':id' é um parâmetro que será passado para o componente Details. */}
          <Route path="/movie/:id" element={<Details />} />

          {/* Rota da página de filmes favoritos */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;