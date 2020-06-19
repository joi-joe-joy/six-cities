import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";

const offers = [
  {
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
  }
];

describe(`Render PlacesList`, () => {
  it(`render PlacesList correctly`, () => {
    const tree = renderer.create(
        <PlacesList
          offers={offers}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
