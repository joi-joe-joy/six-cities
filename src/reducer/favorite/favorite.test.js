import {reducer, ActionType, ActionCreator, Operation} from "./favorite.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

const favorites = [{
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
  isPremium: false,
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
}];

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      favorites: []
    });
  });

  it(`Reducer should change favorites by a given value`, () => {
    expect(reducer({
      favorites: []
    }, {
      type: ActionType.GET_FAVORITES,
      payload: favorites
    })).toEqual({
      favorites
    });
  });

  it(`Reducer should not change favorites by the same given value`, () => {
    expect(reducer({
      favorites
    }, {
      type: ActionType.GET_FAVORITES,
      payload: favorites
    })).toEqual({
      favorites
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for get favorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(favorites)).toEqual({
      type: ActionType.GET_FAVORITES,
      payload: favorites,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          payload: [{fake: true}]
        });
      });
  });
});
