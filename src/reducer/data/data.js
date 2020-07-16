import {extend} from "../../utils.js";

const initialState = {
  city: null,
  offers: [],
  offersNearby: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`
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
        offersNearby: action.payload
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
