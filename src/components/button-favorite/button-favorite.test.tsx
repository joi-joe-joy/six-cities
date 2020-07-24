import * as React from "react";
import * as renderer from "react-test-renderer";
import ButtonFavorite from "./button-favorite";
import {PlaceCardType} from "../../types";
import {noop} from "../../utils";

it(`Render ButtonFavorite correctly`, () => {
  const tree = renderer.create(
      <ButtonFavorite
        isFavorite={true}
        onToggleFavorite={noop}
        type={PlaceCardType.PROPERTY}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
