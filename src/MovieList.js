import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    // Styles pour le conteneur de la liste de films utilisant CSS grid pour la mise en page
  const styles = {
    movieList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.movieList}>
        {/* 
        Itération à travers la liste des films et rendu d'un composant MovieCard pour chaque film.
        Chaque MovieCard reçoit une prop key unique pour aider React à identifier efficacement chaque élément de la liste.
      */}
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;