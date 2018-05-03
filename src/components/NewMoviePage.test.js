import React from "react";
import { shallow } from "enzyme";
import { MoviePage } from "./MoviePage";
import "jest-localstorage-mock";
import { emptyMovie } from "../constants";
import data from "../data.json";

const { movies } = data;

describe("MoviePage", () => {
  const props = {
    movie: emptyMovie,
    actions: {
      loadMovies: jest.fn(),
      deleteMovie: jest.fn(),
      createMovie: jest.fn(),
      updateMovie: jest.fn()
    }
  };

  it("should render", () => {
    const wrapper = shallow(<MoviePage {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders properly", () => {
    const tree = shallow(<MoviePage {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
