import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => (
  <div className="featured-movie">
    <div className="featured-movie__image">
      <img alt={movie.name} src={movie.image} />
    </div>

    <div className="featured-movie__info">
      <p><b>{movie.name}</b></p>
      <p>{movie.director}</p>
      <p>{movie.released}</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;