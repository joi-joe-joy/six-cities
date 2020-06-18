import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  title: `Beautiful & luxurious apartment at great location`,
  premium: true,
  picture: `img/apartment-01.jpg`,
  price: 380,
  rating: 5,
  type: `apartment`
};

it(`Should bookmark-button be pressed`, () => {
  const onBookmarkButtonClick = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onCardHover={()=>{}}
        onBookmarkClick={onBookmarkButtonClick}
      />
  );

  const bookmarkButton = placeCard.find(`button.place-card__bookmark-button.button`);
  bookmarkButton.props().onClick();
  expect(onBookmarkButtonClick.mock.calls.length).toBe(1);
});

it(`Should take card info on hover`, () => {
  const onCardHover = jest.fn((...args) => [...args]);

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onCardHover={onCardHover}
        onBookmarkClick={()=>{}}
      />
  );

  placeCard.props().onMouseOver();

  expect(onCardHover.mock.calls[0][0]).toMatchObject(offer);
});

