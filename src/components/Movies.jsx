import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../actions/movie_actions";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1177px) {
    justify-content: center;
  }

  @media screen and (max-width: 882px) {
    justify-content: center;
  }
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  margin-top: 60px;
`;

export const Movies = ({ movies }) => (
  <div>
    <Header>Movies</Header>
    <Link to={"/movies/new"} className="btn btn-success">
      <span>Add Movie</span>
    </Link>
    <hr />
    <MoviesWrapper>
      {movies.map((movie, idx) => <MovieItem key={idx} movie={movie} />)}
    </MoviesWrapper>
  </div>
);

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
