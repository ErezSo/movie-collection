import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie" style={{ float: "left" }}>
      <div className="movie__image">
        <Link to={`/movies/${movie.id}`}>
          <img alt={movie.name} src={movie.image} />
        </Link>
      </div>

      <div className="movie__info">
        <p className="movie-name">
          <b>
            {movie.name}
          </b>
        </p>
        <p>
          {movie.director}
        </p>
        <p>
          {movie.released}
        </p>
      </div>
    </div>
  )
}

export default MovieItem;
