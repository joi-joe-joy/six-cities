import * as React from "react";
import * as renderer from "react-test-renderer";
import Footer from "./footer";
import {BrowserRouter} from "react-router-dom";

it(`Render Footer correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
