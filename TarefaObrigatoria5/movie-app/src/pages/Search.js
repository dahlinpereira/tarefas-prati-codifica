import React, { useState } from 'react';
import api from '../services/api';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchMovies = async (page = 1) => {
    // Validação para não buscar com o campo vazio
    if (!query.trim()) {
      setError('Por favor, digite um termo para a busca.');
      setMovies([]);
      setTotalPages(0);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await api.get('/search/movie', {
        params: {
          query,
          page,
        },
      });

      if (response.data.results.length === 0) {
        setError('Nenhum filme encontrado com este termo.');
        setMovies([]);
        setTotalPages(0);
      } else {
        setMovies(response.data.results);
        setCurrentPage(response.data.page);
        setTotalPages(response.data.total_pages);
      }
    } catch (err) {
      setError('Erro ao buscar filmes. Verifique sua conexão ou chave de API e tente novamente.');
      setMovies([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Ao fazer uma nova busca, sempre comece pela página 1
    searchMovies(1);
  };

  const handlePageChange = (newPage) => {
    // Mantém a tela na mesma posição ao mudar de página
    window.scrollTo(0, 0);
    searchMovies(newPage);
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome de um filme..."
          aria-label="Buscar Filmes"
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <LoadingSpinner />}
      
      {error && !loading && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Search;