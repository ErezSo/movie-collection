import React from "react";
import { shallow } from "enzyme";
import MovieItem from "./MovieItem";
import data from "../data.json";

const { movies } = data;

describe("MovieItem", () => {
  const movie = movies[0];
  it("should render", () => {
    const wrapper = shallow(<MovieItem movie={movie} />);
    expect(wrapper).toHaveLength(1);
  });
  it("renders properly", () => {
    const tree = shallow(<MovieItem movie={movie} />);
    expect(tree).toMatchSnapshot();
  });
});
