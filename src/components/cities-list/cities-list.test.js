import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {CitiesList} from "./cities-list";
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

describe(`Render CitiesList correctly`, () => {
  it(`Render CitiesList correctly without currentCity`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        },
        citiesList: [{
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }]
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <CitiesList
            citiesList={[{
              name: `Paris`,
              location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
              }
            }]}
            onLocationClick={()=>{}}
            currentCity={{
              name: `Paris`,
              location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
              }
            }}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render CitiesList correctly with currentCity`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        },
        citiesList: [{
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }]
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <CitiesList
            currentCity={{
              name: `Paris`,
              location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
              }
            }}
            citiesList={[{
              name: `Paris`,
              location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
              }
            }]}
            onLocationClick={()=>{}}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
