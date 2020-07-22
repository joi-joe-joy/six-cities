import * as React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

const authInfo = {
  avatarUrl: `/static/avatar/7.jpg`,
  email: `joi.joe.joy@mail.ru`,
  id: 1,
  isPro: false,
  name: `joi.joe.joy`
};

describe(`Render Header correctly`, () => {
  it(`Render Header correctly with autorization`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        authInfo
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Header
              authStatus={`NO_AUTH`}
              authInfo={authInfo}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Header correctly without autorization`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        authInfo
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Header
              authStatus={`AUTH`}
              authInfo={authInfo}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
