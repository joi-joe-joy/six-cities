import {extend} from "../../utils";

const initialState = {
  city: null,
  offers: [],
  nearbyOffers: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city
    };
  },
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };
  },
  loadNearbyOffers: (offers) => {
    return {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers
    };
  },
  changeFavorite: (offer) => {
    return {
      type: ActionType.CHANGE_FAVORITE,
      payload: offer
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      if (action.payload) {
        return extend(state, {
          city: action.payload
        });
      } else {
        return state;
      }
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
        city: action.payload[0].city
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload
      });
    case ActionType.CHANGE_FAVORITE:
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      return extend(state, {
        offers: [
          ...state.offers.slice(0, index),
          action.payload,
          ...state.offers.slice(index + 1)
        ]
      });
    default:
      return state;
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((res) => {
        dispatch(ActionCreator.loadOffers(res.data));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadNearbyOffers: (hotelId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${hotelId}/nearby`)
      .then((res) => {
        dispatch(ActionCreator.loadNearbyOffers(res.data));
      })
      .catch((err) => {
        throw err;
      });
  }
};

export {reducer, ActionType, ActionCreator, Operation};
