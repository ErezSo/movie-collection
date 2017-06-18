import * as types from '../actions/action_types';
import initialState from './initial_state';

const movieReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
};

export default movieReducer;
