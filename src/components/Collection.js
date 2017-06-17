import React from 'react';
import movies from '../movies.json';
import MovieItem from './MovieItem';

const Collection = () => {
  const topFour = movies.slice(0, 4);

  return (
    <div>
      <h2 className="featured-movies__header">
        Movies
      </h2>

      <hr />

      <div className="featured-movies">
        {topFour.map((movie, i) => (
          <MovieItem key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Collection;