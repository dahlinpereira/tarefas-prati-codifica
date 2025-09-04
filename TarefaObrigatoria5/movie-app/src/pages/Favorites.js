import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // useEffect é usado para ler do localStorage assim que o componente é montado.
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez.

  return (
    <div className="favorites-page">
      <h2>Meus Filmes Favoritos</h2>
      {favoriteMovies.length > 0 ? (
        <div className="movie-list">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
      )}
    </div>
  );
};

export default Favorites;