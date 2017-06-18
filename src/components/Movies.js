import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movie_actions';
import MovieItem from './MovieItem';

const Movies = (props) => {
  const { movies } = props;
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

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);