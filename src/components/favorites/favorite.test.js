import React from "react";
import renderer from "react-test-renderer";
import Favorite from "./favorites";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Render Favorite correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Favorite/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
