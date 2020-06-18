import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const offerPremium = {
  title: `Beautiful & luxurious apartment at great location`,
  premium: true,
  picture: `img/apartment-01.jpg`,
  price: 380,
  rating: 5,
  type: `apartment`
};

const offerWithoutPremium = {
  title: `Beautiful & luxurious apartment at great location`,
  premium: true,
  picture: `img/apartment-01.jpg`,
  price: 380,
  rating: 5,
  type: `apartment`
};

describe(`Render PlaceCard`, () => {
  it(`PlaceCard render correctly with Premium`, () => {
    const tree = renderer
      .create(<PlaceCard
        offer={offerPremium}
        onBookmarkClick={()=>{}}
        onCardHover={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PlaceCard render correctly without Premium`, () => {
    const tree = renderer
      .create(<PlaceCard
        offer={offerWithoutPremium}
        onBookmarkClick={()=>{}}
        onCardHover={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
