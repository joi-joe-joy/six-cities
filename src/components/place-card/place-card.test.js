import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card";

describe(`Render PlaceCard`, () => {
  it(`PlaceCard with title`, () => {
    const tree = renderer
      .create(<PlaceCard
        title={`Wood and Rocks`}
        onBookmarkClick={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PlaceCard without title`, () => {
    const tree = renderer
      .create(<PlaceCard
        title={``}
        onBookmarkClick={()=>{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
