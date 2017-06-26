import * as types from '../actions/action_types';
import initialState from './initial_state';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const movieReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;

    case types.UPDATE_MOVIE_SUCCESS:
      return [
        ...state.filter(movie => movie.id !== action.movie.id),
        Object.assign({}, action.movie)
      ];

    case types.CREATE_MOVIE_SUCCESS:
      history.push(`/movies/${action.movie.id}`)
      return [
        ...state.filter(movie => movie.id !== action.movie.id),
        Object.assign({}, action.movie)
      ];

    case types.DELETE_MOVIE_SUCCESS:
      // return [
      //   ...state.filter(movie => movie.id !== action.movie.id)
      // ];
      const newState = Object.assign([], state);
      const indexOfMovieToDelete = state.findIndex(movie => {
        return movie.id === action.movie.id
      })
      newState.splice(indexOfMovieToDelete, 1);
      history.push('/');
      return newState;

    default:
      return state;
  }
};

export default movieReducer;
