import React from "react";
import { shallow } from "enzyme";
import Textarea from "./Textarea";

describe("Textarea", () => {
  const props = {
    name: "name",
    label: "label",
    onChange: jest.fn(),
    placeholder: "placeholder",
    value: "value"
  };
  it("should render", () => {
    const wrapper = shallow(<Textarea {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders properly", () => {
    const tree = shallow(<Textarea {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
