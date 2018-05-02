import data from "../data.json";
const moviesArr = data.movies;

const placeholderImg =
  "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg";

/**
 * Remove false in signature to reset localStorage from the existing movies object
 */
function resetLocalStorageMovies(go = "go") {
  if (go !== false) {
    window.localStorage.removeItem("movies");
  }
}
resetLocalStorageMovies(false);

// Save the movies array to localStorage as it's going to be our DB
if (!window.localStorage.movies) {
  window.localStorage.setItem("movies", JSON.stringify(moviesArr));
}

/**
 * Get the movies DB object from the localStorage
 */
const getMoviesParsed = () => JSON.parse(window.localStorage.getItem("movies"));

export const getAllMovies = () => {
  return new Promise((resolve, reject) => {
    const movies = getMoviesParsed();
    resolve(Object.assign([], movies));
  });
};

export const generateId = movie => {
  const movies = getMoviesParsed();
  const lastId = movies.length ? movies[movies.length - 1].id : 0;
  return lastId + 1;
};

export const saveMovies = movie => {
  movie = Object.assign({}, movie); // to avoid manipulating object passed in.
  return new Promise((resolve, reject) => {
    //Set image
    movie.image = movie.image || placeholderImg;

    // Update existing movie
    if (movie.id) {
      let moviesArrCopy = JSON.parse(window.localStorage.movies);
      const existingMovieIndex = moviesArr.findIndex(
        a => parseInt(a.id, 10) === movie.id
      );
      moviesArrCopy.splice(existingMovieIndex, 1, movie);
      window.localStorage.removeItem("movies");
      window.localStorage.setItem("movies", JSON.stringify(moviesArrCopy));

      // Create new movie
    } else {
      const moviesArrCopy = JSON.parse(window.localStorage.movies);
      movie.id = movie.newId;
      const newMoviesArr = moviesArrCopy.concat(movie);
      window.localStorage.removeItem("movies");
      window.localStorage.setItem("movies", JSON.stringify(newMoviesArr));
    }

    resolve(movie);
  });
};

export const removeMovie = movie => {
  return new Promise((resolve, reject) => {
    const moviesArrCopy = JSON.parse(window.localStorage.movies);
    const indexOfMovieToDelete = moviesArrCopy.findIndex(
      movieCopy => parseInt(movieCopy.id, 10) === movie.id
    );
    const newMoviesArr = moviesArrCopy.slice(indexOfMovieToDelete, 1);
    window.localStorage.removeItem("movies");
    window.localStorage.setItem("movies", JSON.stringify(newMoviesArr));
    resolve();
  });
};
