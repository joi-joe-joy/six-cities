import {HouseType} from "./types";

export const HouseTypeTemplate = {
  [HouseType.APARTMENT]: `Apartment`,
  [HouseType.HOTEL]: `Hotel`,
  [HouseType.HOUSE]: `House`,
  [HouseType.ROOM]: `Private Room`
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_ID: `/offer/:id`,
  OFFER: `/offer`
};

export const ErrorType = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export const MAX_REVIEW_COUNT = 10;

export const MAX_COMMENT_LENGTH = 300;

export const MAX_PREVIEW_IMAGE_COUNT = 6;

export const KEY_LENGTH = 10;

export const NEARBY_OFFERS_COUNT = 3;
