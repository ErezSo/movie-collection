import * as types from './action_types';
import moviesApi from '../api/movies_api';

export const loadMoviesSuccess = movies => {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export const saveMovieSuccess = movie => {
  return {type: types.SAVE_MOVIE_SUCCESS, movie}
}

export const loadMovies = () => {
  return dispatch => {
    return moviesApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
};

export const saveMovie = (movie) => {
  return dispatch => {
    return moviesApi.saveMovies(movie).then(responseMovie => {
      dispatch(saveMovieSuccess(responseMovie));
    }).catch(error => {
      throw(error);
    })
  }
}