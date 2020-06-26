import React from "react";
import renderer from "react-test-renderer";
import CitiesPlaceCard from "./cities-place-card.jsx";

const offer = {
  id: 2,
  title: `Wood and stone place`,
  premium: false,
  pictures: [
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/room.jpg`,
    `img/studio-01.jpg`,
    `img/studio-photos.jpg`
  ],
  price: 180,
  rating: 4.3,
  type: `hotel`,
  bedrooms: 2,
  amenities: [`Indoor fireplace`, `Kitchen`, `Wifi`, `Washer`],
  maxGuestsNumber: `Max 2 adults, 2 children`,
  description: `Newly renovated quiet cozy haven in the middle of the hustle and bustle of New York City with breathtaking views of the Manhattan skyline from every window.`,
  host: {
    photo: `img/avatar-max.jpg`,
    name: `Maxim Doff`,
    super: false
  },
  coordinations: [52.369553943508, 4.85309666406198],
  reviews: [],
  nearOffers: []
};

describe(`Render CitiesPlaceCard`, () => {
  it(`Render CitiesPlaceCard correctly`, () => {
    const tree = renderer
      .create(
          <CitiesPlaceCard
            key={1}
            offer={offer}
            onCardHover={()=>{}}
            onBookmarkClick={()=>{}}
            onCardClick={()=>{}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render CitiesPlaceCard correctly with classNames`, () => {
    const tree = renderer
      .create(
          <CitiesPlaceCard
            key={1}
            offer={offer}
            onCardHover={()=>{}}
            onBookmarkClick={()=>{}}
            onCardClick={()=>{}}
            classNames={{
              card: `test`,
              imgWrap: `test`
            }}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
