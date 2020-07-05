import React from "react";
import renderer from "react-test-renderer";
import SortVariants from "./sort-variants.jsx";

const children = <div/>;

it(`Render CitiesPlaces correctly`, () => {
  const tree = renderer
    .create(
        <SortVariants>
          {children}
        </SortVariants>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
