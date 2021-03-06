import * as React from "react";
import * as renderer from "react-test-renderer";
import SortVariants from "./sort-variants";

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
