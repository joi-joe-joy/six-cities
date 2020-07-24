import * as React from "react";
import * as renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import {PlaceCardType, Offer} from "../../types";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {BrowserRouter} from "react-router-dom";
import {noop} from "../../utils";

const mockStore = configureStore([]);

const offerPremium: Offer = {
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
};

const offerWithoutPremium: Offer = {
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
};

describe(`Render PlaceCard`, () => {
  it(`PlaceCard render correctly with Premium`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlaceCard
                offer={offerPremium}
                onCardHover={noop}
                onCardHoverOut={noop}
                type={PlaceCardType.CITIES}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PlaceCard render correctly without Premium`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlaceCard
                offer={offerWithoutPremium}
                onCardHover={noop}
                onCardHoverOut={noop}
                type={PlaceCardType.CITIES}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PlaceCard render correctly NEAR`, () => {
    const store = mockStore({
      [NameSpace.PLACE]: {
        currentCard: {}
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlaceCard
                offer={offerWithoutPremium}
                onCardHover={noop}
                onCardHoverOut={noop}
                type={PlaceCardType.NEAR}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
