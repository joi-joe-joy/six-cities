export enum HouseType {
  APARTMENT = `apartment`,
  ROOM = `room`,
  HOUSE = `house`,
  HOTEL = `hotel`
};

export enum PlaceCardType {
  CITIES = `cities`,
  NEAR = `near`,
  FAVORITES = `favorites`,
  PROPERTY = `property`
};

export enum PageType {
  PROPERTY = `property`,
  MAIN = `main`,
  LOGIN = `login`,
  FAVORITES = `favorites`,
  FAVORITES_EMPTY = `favorites_empty`
};

export enum SortType {
  POPULAR = `popular`,
  TO_HIGH = `to-high`,
  TO_LOW = `to-low`,
  TOP_RATED = `top-rated`
};

export enum AuthStatus {
  NO_AUTH = `NO_AUTH`,
  AUTH = `AUTH`,
};

export interface Location {
  latitude: number,
  longitude: number,
  zoom: number
}

export interface City {
  location: Location,
  name: string
}

export interface User {
  id: number,
  avatarUrl: string,
  name: string,
  isPro: boolean
}

export type AuthInfo = User & {
  email: string
}

export interface Offer {
  id: number,
  title: string,
  maxAdults: number,
  description: string,
  isPremium: boolean,
  isFavorite: boolean,
  images: Array<string>,
  previewImage: string,
  goods: Array<string>,
  price: number,
  rating: number,
  bedrooms: number,
  type: HouseType.APARTMENT | HouseType.ROOM | HouseType.HOUSE | HouseType.HOTEL,
  host: User,
  location: Location,
  city: City,
};

export interface Comment {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User
}
