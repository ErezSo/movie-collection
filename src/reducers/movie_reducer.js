import * as types from '../actions/action_types';
import initialState from './initial_state';

const movieReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    case types.SAVE_MOVIE_SUCCESS:
      return [
        ...state.filter(movie => movie.id !== action.movie.id),
        Object.assign({}, action.movie)
      ];
    default:
      return state;
  }
};

export default movieReducer;
