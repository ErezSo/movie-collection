import React from 'react';
import movies from '../movies.json';
import MovieItem from './MovieItem';

const Collection = () => {
  return (
    <div>
      <h2 className="featured-movies__header">
        Movies
      </h2>

      <hr />

      <div className="featured-movies">
        {movies.map((movie, i) => (
          <MovieItem key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Collection;