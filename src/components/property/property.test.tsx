import * as React from "react";
import * as renderer from "react-test-renderer";
import Property from "./property";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";

const mockStore = configureStore([]);

const offerWithPremium = {
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

const comments = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
}];

it(`Render Property correctly`, () => {
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
      },
      offers: [offerWithPremium],
      offersNearby: [offerWithPremium],
    },
    [NameSpace.COMMENTS]: {
      comments
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Property
          authStatus={`AUTH`}
          city={{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }}
          offer={offerWithPremium}
          nearbyOffers={[offerWithPremium]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Property render correctly without Premium`, () => {
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
      },
      offers: [offerWithPremium],
      offersNearby: [offerWithPremium],
    },
    [NameSpace.COMMENTS]: {
      comments
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Property
            authStatus={`AUTH`}
            city={{
              name: `Paris`,
              location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
              }
            }}
            offer={offerWithoutPremium}
            nearbyOffers={[offerWithPremium]}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
