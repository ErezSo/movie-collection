import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movie_actions';
import MovieForm from './MovieForm';

class NewMoviePage extends React.Component {
  state = {
    movie: {
      id: 0,
      name: '',
      director: '',
      released: '',
      description: ''
    },
    saving: false
  }

  updateMovieState = (event) => {
    const field = event.target.name;
    let movie = this.state.movie;
    movie[field] = event.target.value;
    return this.setState({ movie });
  }

  createMovie = event => {
    event.preventDefault();
    this.props.actions.createMovie(this.state.movie);
  }

  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <MovieForm
          movie={this.state.movie}
          onSave={this.createMovie}
          onChange={this.updateMovieState} />
      </div>
    )
  }
}

NewMoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  let movie = { id: 0, name: '', director: '', released: '', description: '' };
  const movieId = movie.params ? ownProps.params.id : undefined;
  if (movieId && state.movies.length > 0) {
    movie = Object.assign({}, state.movies.find(movies => movies.id === parseInt(movieId, 10)))
  }

  return { movie }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);