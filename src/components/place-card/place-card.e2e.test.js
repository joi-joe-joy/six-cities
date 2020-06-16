import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark-button be pressed`, () => {
  const onBookmarkButtonClick = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        title={`Wood and rocks`}
        onBookmarkClick={onBookmarkButtonClick}
      />
  );

  const bookmarkButton = placeCard.find(`button.place-card__bookmark-button.button`);

  bookmarkButton.props().onClick();

  expect(onBookmarkButtonClick.mock.calls.length).toBe(1);
});
