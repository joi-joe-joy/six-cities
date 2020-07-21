import React from "react";
import renderer from "react-test-renderer";
import ButtonFavorite from "./button-favorite";
import {PlaceCardType} from "../../const.js";

it(`Render ButtonFavorite correctly`, () => {
  const tree = renderer.create(
      <ButtonFavorite
        isFavorite={true}
        onToggleFavorite={()=>{}}
        type={PlaceCardType.PROPERTY}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
