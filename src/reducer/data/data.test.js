import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

const offersList = [{
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
      city: null,
      offers: [],
    });
  });

  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      offers: offersList,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }
    })).toEqual({
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      offers: offersList,
    });
  });

  it(`Reducer should not change city by the same given value`, () => {
    expect(reducer({
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      offers: offersList,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }
    })).toEqual({
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      offers: offersList,
    });
  });

  it(`Reducer should change offers by a given value`, () => {
    expect(reducer({
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersList
    })).toEqual({
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      offers: offersList,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for change city returns correct action without city`, () => {
    expect(ActionCreator.changeCity()).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: undefined,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}]
        });
      });
  });
});
