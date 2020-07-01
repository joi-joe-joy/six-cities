import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {CitiesList} from "./cities-list";

const mockStore = configureStore([]);

describe(`Render CitiesList correctly`, () => {
  it(`Render CitiesList correctly without currentCity`, () => {
    const store = mockStore({
      city: `Paris`,
      citiesList: [`Paris`, `Amsterdam`, `Brussels`]
    });

    const tree = renderer.create(
        <Provider store={store}>
          <CitiesList
            citiesList={[`Paris`, `Amsterdam`, `Brussels`]}
            onLocationClick={()=>{}}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render CitiesList correctly with currentCity`, () => {
    const store = mockStore({
      city: `Paris`,
      citiesList: [`Paris`, `Amsterdam`, `Brussels`]
    });

    const tree = renderer.create(
        <Provider store={store}>
          <CitiesList
            currentCity={`Paris`}
            citiesList={[`Paris`, `Amsterdam`, `Brussels`]}
            onLocationClick={()=>{}}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
