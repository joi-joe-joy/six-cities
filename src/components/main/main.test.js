import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";
import Main from "./main";

const mockStore = configureStore([]);

const offers = [
  {
    bedrooms: 2,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    goods: [`Air conditioning`, `Laptop friendly workspace`, `Baby seat`, `Fridge`, `Breakfast`, `Washer`, `Washing machine`, `Dishwasher`, `Coffee machine`, `Towels`],
    host: {id: 25, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
    id: 1,
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 48.865610000000004,
      longitude: 2.350499,
      zoom: 16
    },
    maxAdults: 8,
    previewImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
    price: 397,
    rating: 3.6,
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    type: `hotel`
  }
];

describe(`Render Main`, () => {
  it(`Main with offers`, () => {
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
        offers,
        citiesList: [{
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }, {
          name: `Amsterdam`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }]
      },
      [NameSpace.PLACE]: {
        sorting: `popular`,
        hoverCard: offers[0]
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main
              offers={offers}
              onLocationClick={()=>{}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Main without offers`, () => {
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
        offers,
        citiesList: [{
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }, {
          name: `Amsterdam`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        }]
      },
      [NameSpace.PLACE]: {
        sorting: `popular`,
        hoverCard: offers[0]
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main
              onLocationClick={()=>{}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
