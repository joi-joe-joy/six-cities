import {HouseType} from "./types";

export const HouseTypeTemplate = {
  [HouseType.APARTMENT]: `Apartment`,
  [HouseType.HOTEL]: `Hotel`,
  [HouseType.HOUSE]: `House`,
  [HouseType.ROOM]: `Private Room`
};

export const MAX_REVIEW_COUNT = 10;

export const MAX_COMMENT_LENGTH = 300;

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_ID: `/offer/:id`,
  OFFER: `/offer`
};
