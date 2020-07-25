import * as React from "react";
import * as renderer from "react-test-renderer";
import Page from "./page";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {BrowserRouter} from "react-router-dom";
import {PageType} from "../../types";

const children = <div/>;

const mockStore = configureStore([]);

const authInfo = {
  avatarUrl: `/static/avatar/7.jpg`,
  email: `joi.joe.joy@mail.ru`,
  id: 1,
  isPro: false,
  name: `joi.joe.joy`
};

describe(`Render Page correctly`, () => {
  it(`Render Page correctly type MAIN`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        authInfo
      },
      [NameSpace.DATA]: {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Page type={PageType.MAIN}>
              {children}
            </Page>
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Page correctly type LOGIN`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        authInfo
      },
      [NameSpace.DATA]: {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Page type={PageType.LOGIN}>
              {children}
            </Page>
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Page correctly type PROPERTY`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        authInfo
      },
      [NameSpace.DATA]: {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Page type={PageType.PROPERTY}>
              {children}
            </Page>
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
