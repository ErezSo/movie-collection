import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../actions/movie_actions";
import MovieForm from "./MovieForm";
import styled from "styled-components";

const Image = styled.img`
  width: 75%;
  height: auto;
`;

const Info = styled.div`
  width: 100%;
`;

export class MoviePage extends React.Component {
  state = {
    isEditing: false,
    movie: this.props.movie
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.movie.id !== nextProps.movie.id) {
      this.setState({ movie: nextProps.movie });
    }
  };

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  deleteMovie = () => {
    this.props.actions.deleteMovie(this.state.movie);
    this.props.history.push("/");
  };

  updateMovieState = event => {
    const { name: field } = event.target;
    const newMovie = {
      ...this.state.movie,
      [field]: event.target.value
    };
    return this.setState({ movie: newMovie });
  };

  updateMovie = event => {
    event.preventDefault();
    this.props.actions.updateMovie(this.state.movie);
    this.toggleEdit();
  };

  render() {
    const { movie } = this.state;
    const {
      movie: { name, image, director, released, description }
    } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <MovieForm
            movie={movie}
            onSave={this.updateMovie}
            onChange={this.updateMovieState}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="movie-title">
          <h2>{name}</h2>
          <hr />
        </div>
        <div className="movie-container">
          <div className="movie-image">
            <Image src={image} alt="Movie" />
          </div>
          <Info className="movie-information">
            <p>
              <b>Director:</b> {director}
            </p>
            <p>
              <b>Release Date:</b> {released}
            </p>
            <p>
              <b>Description:</b> {description}{" "}
            </p>
            <button className="btn btn-default" onClick={this.toggleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={this.deleteMovie}>
              Delete
            </button>
          </Info>
        </div>
      </div>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number,
    newId: PropTypes.number
  }).isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  let movie = {
    name: "",
    image: "",
    director: "",
    released: "",
    description: ""
  };
  const movieId = ownProps.match.params.id;
  if (state.movies.length > 0) {
    movie = Object.assign(
      {},
      state.movies.find(movie => movie.id === parseInt(movieId, 10))
    );
  }
  return { movie };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
