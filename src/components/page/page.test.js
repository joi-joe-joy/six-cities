import React from "react";
import renderer from "react-test-renderer";
import Page from "./page.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";

const children = <div/>;

const mockStore = configureStore([]);

describe(`Render Page correctly`, () => {
  it(`Render Page correctly type MAIN`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
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
          <Page type={`main`}>
            {children}
          </Page>
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
        authorizationStatus: `AUTH`
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
          <Page type={`login`}>
            {children}
          </Page>
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
        authorizationStatus: `AUTH`
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
          <Page type={`property`}>
            {children}
          </Page>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
