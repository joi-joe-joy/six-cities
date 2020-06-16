import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

describe(`Render App`, () => {
  it(`Render with offers and rentCount`, () => {
    const tree = renderer
      .create(<App
        rentCount={3}
        offers={offers}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`App without offers and rentCount`, () => {
    const tree = renderer
      .create(<App
        offers={[``]}
        rentCount={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

