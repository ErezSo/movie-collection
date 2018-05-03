import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  text-align: left;
  max-width: 307px;
  height: 464px;
  padding: 0 30px 10px 30px;

  p {
    margin: 0;
    cursor: default;
  }

  p:first-child {
    padding-top: 15px;
  }

  @media screen and (min-width: 590px) {
    max-width: 250px;
    height: 388px;
  }
`;

const MovieItem = ({ movie }) => {
  return (
    <Wrapper className="movie">
      <div>
        <Link to={`/movies/${movie.id}`}>
          <Image alt={movie.name} src={movie.image} />
        </Link>
      </div>
      <div>
        <p>
          <b>{movie.name}</b>
        </p>
        <p>{movie.director}</p>
        <p>{movie.released}</p>
      </div>
    </Wrapper>
  );
};

export default MovieItem;
