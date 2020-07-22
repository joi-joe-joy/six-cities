import {NameSpace} from "../name-space";
import {createSelector} from "reselect";
import {SortType} from "../../types";
import {getSorting} from "../place/selectors";

const NAME_SPACE = NameSpace.DATA;

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

// TODO! const camelize = (str) => {
//   return str
//     .split(`_`)
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join(``);
// };

export const getOffers = (state) => {
  const hotels = state[NAME_SPACE].offers;
  hotels.slice(0).forEach((hotel) => {
    if (hotel.host) {
      hotel.host.isPro = hotel.host.is_pro;
      hotel.host.avatarUrl = hotel.host.avatar_url;
    }
    hotel.isPremium = hotel.is_premium;
    hotel.isFavorite = hotel.is_favorite;
    hotel.maxAdults = hotel.max_adults;
    hotel.previewImage = hotel.preview_image;
  });

  return hotels;
};

export const getNearbyOffers = (state) => {
  const hotels = state[NAME_SPACE].offersNearby;
  hotels.slice(0).forEach((hotel) => {
    if (hotel.host) {
      hotel.host.isPro = hotel.host.is_pro;
      hotel.host.avatarUrl = hotel.host.avatar_url;
    }
    hotel.isPremium = hotel.is_premium;
    hotel.isFavorite = hotel.is_favorite;
    hotel.maxAdults = hotel.max_adults;
    hotel.previewImage = hotel.preview_image;
  });

  return hotels;
};

export const getOffersCityList = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);

const getLocations = (offers) => {
  if (offers) {
    return offers.slice(0, 3).map((item) => item.location);
  }

  return null;
};

export const getNearbyLocations = createSelector(
    getNearbyOffers,
    (offers) => {
      return getLocations(offers);
    }
);

const getMatchId = (_, props) => {
  if (props && props.match && props.match.params && props.match.params.id) {
    return +props.match.params.id;
  }

  return null;
};

export const getOfferByRouteId = createSelector(
    getOffers,
    getMatchId,
    (offers, id) => {
      if (offers) {
        return offers.find((item) => item.id === id);
      }
      return null;
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
          return preparedOffers;
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

export const getIsLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};
