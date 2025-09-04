import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Details = () => {
  // Pega o 'id' do filme da URL (definido na rota em App.js)
  const { id } = useParams();
  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect para buscar os dados do filme quando o componente montar ou o id mudar
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        // Faz a chamada à API incluindo 'credits' para pegar elenco e equipe
        const response = await api.get(`/movie/${id}`, {
          params: { append_to_response: 'credits' },
        });
        setMovie(response.data);

        // Após buscar o filme, verifica se ele está nos favoritos
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isMovieFavorited = favorites.some((favMovie) => favMovie.id === response.data.id);
        setIsFavorite(isMovieFavorited);

      } catch (err) {
        setError('Não foi possível carregar os detalhes do filme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]); // O array de dependências [id] faz o hook rodar novamente se o id mudar

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      // Remove o filme da lista de favoritos
      const newFavorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      // Adiciona o filme à lista de favoritos
      // Usamos uma versão simplificada do objeto para não sobrecarregar o localStorage
      const favoriteMovieData = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      };
      favorites.push(favoriteMovieData);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };


  // Renderização condicional enquanto os dados não chegam
  if (loading) return <LoadingSpinner />;
  if (error) return <p className="error-message">{error}</p>;
  if (!movie) return null;

  // Lógica para extrair o nome do diretor da resposta da API
  const director = movie.credits.crew.find((person) => person.job === 'Director');
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Imagem+N%C3%A3o+Dispon%C3%ADvel';


  return (
    <div className="details-page">
      <img src={posterPath} alt={`Pôster de ${movie.title}`} />
      <div className="details-info">
        <h2>{movie.title} ({movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})</h2>
        <p><strong>Sinopse:</strong> {movie.overview || 'Sinopse não disponível.'}</p>
        <p><strong>Avaliação:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10</p>
        <p><strong>Diretor:</strong> {director ? director.name : 'Não informado'}</p>
        <p><strong>Elenco Principal:</strong> {movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
        
        <button onClick={handleToggleFavorite} className="favorite-button">
          {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default Details;