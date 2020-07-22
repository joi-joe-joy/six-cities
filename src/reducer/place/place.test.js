import {reducer, ActionType, ActionCreator} from "./place";

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
      sorting: `popular`,
      hoverCard: null
    });
  });

  it(`Reducer should change sorting by a given value`, () => {
    expect(reducer({
      sorting: `popular`,
      hoverCard: null
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: `top-rated`
    })).toEqual({
      sorting: `top-rated`,
      hoverCard: null
    });
  });

  it(`Reducer should not change sorting by the same given value`, () => {
    expect(reducer({
      sorting: `popular`,
      hoverCard: null
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: `popular`
    })).toEqual({
      sorting: `popular`,
      hoverCard: null
    });
  });

  it(`Reducer should change hover card by a given value`, () => {
    const [offer] = offersList;

    expect(reducer({
      sorting: `popular`,
      hoverCard: null
    }, {
      type: ActionType.CHANGE_HOVER_CARD,
      payload: offer
    })).toEqual({
      sorting: `popular`,
      hoverCard: offer
    });
  });

  it(`Reducer should not change hover card by the same given value`, () => {
    expect(reducer({
      sorting: `popular`,
      hoverCard: null
    }, {
      type: ActionType.CHANGE_HOVER_CARD,
      payload: null
    })).toEqual({
      sorting: `popular`,
      hoverCard: null
    });
  });
});

describe(`Action creators work correctly`, () => {

  it(`Action creator for change sorting returns correct action`, () => {
    expect(ActionCreator.changeSorting(`top-rated`)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `top-rated`,
    });
  });

  it(`Action creator for change sorting returns correct action without sorting`, () => {
    expect(ActionCreator.changeSorting()).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `popular`,
    });
  });

  it(`Action creator for change hover card returns correct action`, () => {
    const [offer] = offersList;
    expect(ActionCreator.changeHoverCard(offer)).toEqual({
      type: ActionType.CHANGE_HOVER_CARD,
      payload: offer,
    });
  });

  it(`Action creator for change hover card returns correct action without card`, () => {
    expect(ActionCreator.changeHoverCard()).toEqual({
      type: ActionType.CHANGE_HOVER_CARD,
      payload: null,
    });
  });
});

