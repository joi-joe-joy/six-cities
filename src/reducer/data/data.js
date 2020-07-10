import {extend} from "../../utils.js";

const initialState = {
  city: null,
  offers: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
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
        return null;
      }
    case ActionType.LOAD_OFFERS:
      // console.log(action.payload);
      return extend(state, {
        offers: action.payload,
        city: action.payload[0].city
      });
  }

  return state;
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((res) => {
        dispatch(ActionCreator.loadOffers(res.data));
      });
  }
};

export {reducer, ActionType, ActionCreator, Operation};
