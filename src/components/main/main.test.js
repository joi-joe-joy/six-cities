import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    premium: true,
    picture: `img/apartment-01.jpg`,
    price: 380,
    rating: 5,
    type: `apartment`
  }
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
        offers={offers}
        rentCount={0}
        onLocationClick={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
