import React from "react";
import { shallow } from "enzyme";
import Textinput from "./Textinput";

describe("Textinput", () => {
  const props = {
    name: "name",
    label: "label",
    onChange: jest.fn(),
    placeholder: "placeholder",
    value: "value"
  };
  it("should render", () => {
    const wrapper = shallow(<Textinput {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders properly", () => {
    const tree = shallow(<Textinput {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
