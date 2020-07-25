import * as React from 'react';
import * as renderer from "react-test-renderer";
import withFavorite from "./with-favorite";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {Offer, HouseType, PlaceCardType} from "../../types";

const MockComponent = () => {
  return <div/>;
};

const offer: Offer = {
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
  type: HouseType.APARTMENT
};

const mockStore = configureStore([]);
const MockComponentWrap = withFavorite(MockComponent);

it(`should render withFavorite correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: `AUTH`
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MockComponentWrap
          offer={offer}
          type={PlaceCardType.CITIES}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
