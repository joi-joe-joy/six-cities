import React from "react";
import renderer from "react-test-renderer";
import Empty from "./empty.jsx";

it(`Render Empty correctly`, () => {
  const tree = renderer.create(
      <Empty
        city={`Paris`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
