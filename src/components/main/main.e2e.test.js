import React from "react";
import {shallow} from "enzyme";
import Main from "./main";

const offers = [
  {
    title: `Canal View Prinsengracht`,
    premium: true,
    pictures: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/studio-photos.jpg`
    ],
    price: 280,
    rating: 3.8,
    type: `house`,
    bedrooms: 3,
    amenities: [`Indoor fireplace`, `Kitchen`, `Wifi`, `Washer`],
    maxGuestsNumber: `Max 2 adults, 1 children`,
    description: `The apartment has a Queen size bed and a very wide modern couch that turns into a bed for a single person by moving the single portion of the couch to the bottom part of the love seat portion of the couch to create a long comfortable bed for a 3rd person. I hope you will enjoy the decor, it has a european feel towards the French side. You will be in the heart of the East Village in Manhattan, considered to be one of the most exciting and dynamic neighborhoods of the world.`,
    host: {
      photo: ``,
      name: `John Donn`,
      super: true
    }
  }
];

it(`Should tab-city be pressed`, () => {
  const onLocationTabClick = jest.fn();

  const main = shallow(
      <Main
        rentCount={3}
        offers={offers}
        onLocationClick={onLocationTabClick}
        onCardClick={()=>{}}
      />
  );

  const locationTab = main.find(`a.locations__item-link.tabs__item.tabs__item--active`);

  locationTab.props().onClick();

  expect(onLocationTabClick.mock.calls.length).toBe(1);
});
