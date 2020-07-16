import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import {PlaceCardType} from "../../const.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

const offerPremium = {
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

const offerWithoutPremium = {
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
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlaceCard
                isFavorite={false}
                onToggleFavorite={()=>{}}
                offer={offerPremium}
                onCardHover={()=>{}}
                onCardHoverOut={()=>{}}
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
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlaceCard
                offer={offerWithoutPremium}
                onCardHover={()=>{}}
                onCardHoverOut={()=>{}}
                type={PlaceCardType.CITIES}
                isFavorite={false}
                onToggleFavorite={()=>{}}
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
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlaceCard
                offer={offerWithoutPremium}
                onCardHover={()=>{}}
                onCardHoverOut={()=>{}}
                isFavorite={false}
                onToggleFavorite={()=>{}}
                type={PlaceCardType.NEAR}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
