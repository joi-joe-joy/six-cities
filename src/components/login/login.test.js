import * as React from "react";
import renderer from "react-test-renderer";
import Login from "./login";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Render Login correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Login
            onSubmit={()=>{}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
