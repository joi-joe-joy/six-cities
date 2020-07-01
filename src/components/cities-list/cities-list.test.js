import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";

describe(`Render CitiesList correctly`, () => {
  it(`Render CitiesList correctly without currentCity`, () => {
    const tree = renderer.create(
        <CitiesList onLocationClick={()=>{}}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render CitiesList correctly with currentCity`, () => {
    const tree = renderer.create(
        <CitiesList
          currentCity={`Paris`}
          onLocationClick={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
