import * as React from "react";
import renderer from "react-test-renderer";
import FavoritesEmpty from "./favorites-empty";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Render FavoritesEmpty correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <FavoritesEmpty/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
