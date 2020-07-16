import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";
import {BrowserRouter} from "react-router-dom";

it(`Render Footer correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
