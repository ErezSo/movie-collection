import React from 'react';
import movies from '../movies.json';
import MovieItem from './MovieItem';

const Movies = () => {
  return (
    <div>
      <h2 className="movies__header">
        Movies
      </h2>

      <hr />

      <div className="movies">
        {movies.map((movie, i) => (
          <MovieItem key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;