import React from "react";
import {mount} from "enzyme";
import PlaceCard from "./place-card";
import {PlaceCardType} from "../../const.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const offer = {
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

it(`Should bookmark-button be pressed`, () => {
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
      }, {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }]
    }
  });
  const onBookmarkButtonClick = jest.fn();

  const placeCard = mount(
      <Provider store={store}>
        <PlaceCard
          offer={offer}
          onCardHover={()=>{}}
          onCardHoverOut={()=>{}}
          onCardClick={()=>{}}
          onBookmarkClick={onBookmarkButtonClick}
          type={PlaceCardType.CITIES}
        />
      </Provider>
  );

  const bookmarkButton = placeCard.find(`button.place-card__bookmark-button.button`);
  bookmarkButton.props().onClick();
  expect(onBookmarkButtonClick.mock.calls.length).toBe(1);
});

it(`Should take card info on hover`, () => {
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
      }, {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }]
    }
  });
  const onCardHover = jest.fn((...args) => [...args]);

  const placeCard = mount(
      <Provider store={store}>
        <PlaceCard
          offer={offer}
          onCardHover={onCardHover}
          onCardHoverOut={()=>{}}
          onBookmarkClick={()=>{}}
          onCardClick={()=>{}}
          type={PlaceCardType.CITIES}
        />
      </Provider>
  );

  placeCard.simulate(`mouseOver`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toEqual(offer);
});

it(`Should work when hover out`, () => {
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
      }, {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }]
    }
  });
  const onCardHoverOut = jest.fn();

  const placeCard = mount(
      <Provider store={store}>
        <PlaceCard
          offer={offer}
          onCardHover={()=>{}}
          onCardHoverOut={onCardHoverOut}
          onBookmarkClick={()=>{}}
          onCardClick={()=>{}}
          type={PlaceCardType.CITIES}
        />
      </Provider>
  );

  placeCard.simulate(`mouseOut`);

  expect(onCardHoverOut.mock.calls.length).toBe(1);
});

