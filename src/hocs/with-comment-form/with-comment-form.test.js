import React from 'react';
import renderer from "react-test-renderer";
import withCommentForm from "./with-comment-form.js";

const MockComponent = () => <div/>;

const MockComponentWrap = withCommentForm(MockComponent);

it(`should render withActiveItem correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrap/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
