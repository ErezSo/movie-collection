import * as types from './action_types';
import moviesApi from '../api/movies_api';

export function loadMoviesSuccess(Movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, Movies };
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

// export const saveCourse = course => {
//   return (dispatch, getState) => {
//     return courseApi.saveCourse(course).then(savedCourse => {
//       course.id ? dispatch(updareCourseSuccess(savedCourse)) :
//         dispatch(createCourseSuccess(savedCourse));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// };
