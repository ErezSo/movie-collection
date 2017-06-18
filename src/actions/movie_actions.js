import * as types from './action_types';
import moviesApi from '../api/movies_api';

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
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
