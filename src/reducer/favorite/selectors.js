import {NameSpace} from "../name-space";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.FAVORITE;

export const getFavorites = (state) => {
  const favorites = state[NAME_SPACE].favorites;
  favorites.slice(0).forEach((hotel) => {
    if (hotel.host) {
      hotel.host.isPro = hotel.host.is_pro;
      hotel.host.avatarUrl = hotel.host.avatar_url;
    }
    hotel.isPremium = hotel.is_premium;
    hotel.isFavorite = hotel.is_favorite;
    hotel.maxAdults = hotel.max_adults;
    hotel.previewImage = hotel.preview_image;
  });

  return favorites;
};

export const isFavoritesExist = createSelector(
    getFavorites,
    (favorites) => {
      return Boolean(favorites.length);
    }
);

export const getSortedFavorites = createSelector(
    getFavorites,
    (favorites) => {
      return favorites.slice(0).sort((a, b) => a.city.name - b.city.name);
    }
);
