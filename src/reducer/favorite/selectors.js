import {NameSpace} from "../name-space";
import {createSelector} from "reselect";
import {renameKeys} from "../../utils";

const NAME_SPACE = NameSpace.FAVORITE;

export const getFavorites = (state) => {
  const favorites = state[NAME_SPACE].favorites.slice(0);
  const newFavorites = [];
  favorites.forEach((hotel) => {
    newFavorites.push(renameKeys(hotel));
  });

  return newFavorites;
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
      return favorites.slice(0).sort((a, b) => {
        if (a.city.name < b.city.name) {
          return -1;
        } else if (a.city.name > b.city.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
);
