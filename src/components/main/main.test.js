import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";

const offers = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

describe(`Render Main`, () => {
  it(`Main with offers and rentCount`, () => {
    const tree = renderer
      .create(<Main
        offers={offers}
        rentCount={5}
        onLocationClick={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Main without offers and rentCount`, () => {
    const tree = renderer
      .create(<Main
        offers={[``]}
        rentCount={0}
        onLocationClick={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
