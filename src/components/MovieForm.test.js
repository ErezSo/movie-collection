import React from "react";
import { shallow } from "enzyme";
import MovieForm from "./MovieForm";
import data from "../data.json";

const { movies } = data;

describe("MovieForm", () => {
  const props = {
    movie: movies[0],
    onSave: jest.fn(),
    onChange: jest.fn()
  };
  it("should render", () => {
    const wrapper = shallow(<MovieForm {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders properly", () => {
    const tree = shallow(<MovieForm {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
