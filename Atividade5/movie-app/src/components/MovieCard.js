import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  // Constrói a URL completa para o pôster do filme.
  // Se o filme não tiver um pôster, usa uma imagem placeholder.
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Imagem+N%C3%A3o+Dispon%C3%ADvel';

  // Extrai apenas o ano da data de lançamento.
  const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A';

  return (
    <div className="movie-card">
      <img src={posterPath} alt={`Pôster do filme ${movie.title}`} />
      <h3>{movie.title}</h3>
      <p>Ano: {releaseYear}</p>
      <Link to={`/movie/${movie.id}`} className="details-button">
        Ver Detalhes
      </Link>
    </div>
  );
};

export default MovieCard;