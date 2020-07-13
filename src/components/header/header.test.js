import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

describe(`Render Header correctly`, () => {
  it(`Render Header correctly with autorization`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <Header authStatus={`NO_AUTH`}/>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Header correctly without autorization`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <Header authStatus={`AUTH`}/>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
