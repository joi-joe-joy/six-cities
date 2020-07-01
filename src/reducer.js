import {extend} from "./utils.js";
import offers from "./mocks/offers.js";

let initCity = offers[0].city;
let initOffers = offers.filter((offer) => offer.city === initCity);

// Получаем все значения городов
let cities = offers.map((offer)=>offer.city);
// Получаем уникальные значения городов
let citiesList = Array.from(new Set(cities));

const initialState = {
  city: initCity,
  offersCityList: initOffers,
  offers,
  citiesList
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_CITY_LIST: `GET_OFFERS_CITY_LIST`,
};

const ActionCreator = {
  changeCity: (city) => {
    let changedCity = city ? city : offers[0].city;

    return {
      type: ActionType.CHANGE_CITY,
      payload: changedCity
    };
  },
  getOffersCityList: (city) => {
    let offersCityList = offers.filter((offer) => offer.city === city);

    return {
      type: ActionType.GET_OFFERS_CITY_LIST,
      payload: offersCityList
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS_CITY_LIST:
      return extend(state, {
        offersCityList: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
