import React from "react";
import {mount} from "enzyme";
import PlaceCard from "./place-card";
import {PlaceCardType} from "../../const.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const offer = {
  id: 5,
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
};

it(`Should bookmark-button be pressed`, () => {
  const store = mockStore({
    city: `Paris`,
    citiesList: [`Paris`, `Amsterdam`, `Brussels`]
  });
  const onBookmarkButtonClick = jest.fn();

  const placeCard = mount(
      <Provider store={store}>
        <PlaceCard
          offer={offer}
          onCardHover={()=>{}}
          onCardClick={()=>{}}
          onBookmarkClick={onBookmarkButtonClick}
          type={PlaceCardType.CITIES}
        />
      </Provider>
  );

  const bookmarkButton = placeCard.find(`button.place-card__bookmark-button.button`);
  bookmarkButton.props().onClick();
  expect(onBookmarkButtonClick.mock.calls.length).toBe(1);
});

it(`Should take card info on hover`, () => {
  const store = mockStore({
    city: `Paris`,
    citiesList: [`Paris`, `Amsterdam`, `Brussels`]
  });
  const onCardHover = jest.fn((...args) => [...args]);

  const placeCard = mount(
      <Provider store={store}>
        <PlaceCard
          offer={offer}
          onCardHover={onCardHover}
          onBookmarkClick={()=>{}}
          onCardClick={()=>{}}
          type={PlaceCardType.CITIES}
        />
      </Provider>
  );

  placeCard.simulate(`mouseOver`);

  expect(onCardHover.mock.calls[0][0]).toEqual(5);
});

