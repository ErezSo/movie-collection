import React from 'react';
import PropTypes from 'prop-types';
import movies from '../movies.json';

const MoviePage = ({match}) => {
  const movieId = match.params.id;
  const movie = movies.find(movie => 
    movie.id === parseInt(movieId, 10));

  return (
    <div>
      <div className="movie-title">
        <h2>{movie.name}</h2>

        <hr/>
      </div>

      <div className="movie-container">
        <div className="movie-image">
          <img src={movie.image} alt='' style={{width: '75%',height: 'auto' }}/>
        </div>
        
        <div className="movie-information" style={{height: '100%'}}>
          <p><b>Director:</b> {movie.director}</p>
          <p><b>Release Date:</b> {movie.released}</p>
          <p><b>Description:</b> {movie.description} </p>
        </div>
      </div>
    </div>
  )
};

MoviePage.propTypes = {
  params: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }),
};

export default MoviePage;