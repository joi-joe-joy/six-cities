import * as React from "react";
import * as renderer from "react-test-renderer";
import Empty from "./empty";

it(`Render Empty correctly`, () => {
  const tree = renderer.create(
      <Empty/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
