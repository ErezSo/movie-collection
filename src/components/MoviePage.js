import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movie_actions';

class MoviePage extends React.Component {
  state = {
    isEditing: false,
    movie: this.props.movie
  }

  // In case the state been changed after render
  componentWillReceiveProps = nextProps => {
    if (this.props.movie.id !== nextProps.movie.id) {
      this.setState({movie: nextProps.movie})
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }))
  }

  render() {
    const { movie } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit movie</h1>
          {/*< movie form coming soon!/> */}
        </div>
      )
    }
    return (
      <div>
        <div className="movie-title">
          <h2>{movie.name}</h2>

          <hr />
        </div>

        <div className="movie-container">
          <div className="movie-image">
            <img src={movie.image} alt='' style={{ width: '75%', height: 'auto' }} />
          </div>

          <div className="movie-information" style={{ height: '100%' }}>
            <p><b>Director:</b> {movie.director}</p>
            <p><b>Release Date:</b> {movie.released}</p>
            <p><b>Description:</b> {movie.description} </p>
            <button className="btn btn-primary" onClick={this.toggleEdit}>Edit</button>
          </div>
        </div>
      </div>
    )
  }
};

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  let movie = { name: '', image: '', director: '', released: '', description: '' };
  const movieId = ownProps.match.params.id;
  if (state.movies.length > 0) {
    movie = Object.assign({}, state.movies.find(movies => movies.id === parseInt(movieId, 10)))
  }
  return { movie }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);