import React from "react";
import renderer from "react-test-renderer";
import Login from "./login.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`Render Login correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <Login
          onSubmit={()=>{}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
