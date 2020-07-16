import React from "react";
import renderer from "react-test-renderer";
import Empty from "./empty.jsx";

it(`Render Empty correctly`, () => {
  const tree = renderer.create(
      <Empty/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
