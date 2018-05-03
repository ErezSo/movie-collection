import React from "react";
import { shallow } from "enzyme";
import { Movies } from "./Movies";
import data from "../data.json";

const { movies } = data;

describe("Movies", () => {
  it("should render", () => {
    const wrapper = shallow(<Movies movies={movies} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders properly", () => {
    const tree = shallow(<Movies movies={movies} />);
    expect(tree).toMatchSnapshot();
  });
});
