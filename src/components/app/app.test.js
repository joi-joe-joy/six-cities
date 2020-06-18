import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [{
  title: `Beautiful & luxurious apartment at great location`,
  premium: true,
  picture: `img/apartment-01.jpg`,
  price: 380,
  rating: 5,
  type: `apartment`
},
{
  title: `Wood and stone place`,
  premium: false,
  picture: `img/apartment-02.jpg`,
  price: 180,
  rating: 4,
  type: `hotel`
}];

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

  it(`App without rentCount`, () => {
    const tree = renderer
      .create(<App
        offers={offers}
        rentCount={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

