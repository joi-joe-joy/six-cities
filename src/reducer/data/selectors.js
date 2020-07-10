import {NameSpace} from "../name-space.js";
import {createSelector} from "reselect";
import {SortType} from "../../const";
import {getSorting} from "../place/selectors.js";

const NAME_SPACE = NameSpace.DATA;

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

// const camelize = (str) => {
//   return str
//     .split(`_`)
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join(``);
// };

export const getOffers = (state) => {
  const hotels = state[NAME_SPACE].offers;
  if (hotels.host) {
    hotels.host.isPro = hotels.host.is_pro;
    hotels.host.avatarUrl = hotels.host.avatar_url;
  }
  hotels.isPremium = hotels.is_premium;
  hotels.maxAdults = hotels.max_adults;
  hotels.previewImage = hotels.preview_image;
  return hotels;
};

export const getOffersCityList = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);

export const getCitiesList = createSelector(
    getOffers,
    (offers) => {
      // Список уникальных городов
      let cities = [...new Set(offers.map((offer)=>offer.city.name))];
      const citiesObject = [];
      // Теперь нужно собрать массив объектов уникальных городов (так как объекты все уникальны)
      cities.forEach((city) => {
        // find возвращает только первое совпадение
        const offer = offers.find((offerItem) => offerItem.city.name === city);
        citiesObject.push(offer.city);
      });
      return citiesObject;
    }
);

export const getSortedOffers = createSelector(
    getSorting,
    getOffersCityList,
    (sortType, offers) => {
      const preparedOffers = offers.slice(0);
      switch (sortType) {
        case SortType.POPULAR:
          return preparedOffers.sort((a, b) => +a.is_favorite - +b.is_favorite);
        case SortType.TO_HIGH:
          return preparedOffers.sort((a, b) => a.price - b.price);
        case SortType.TO_LOW:
          return preparedOffers.sort((a, b) => b.price - a.price);
        case SortType.TOP_RATED:
          return preparedOffers.sort((a, b) => b.rating - a.rating);
        default:
          return preparedOffers;
      }
    }
);


