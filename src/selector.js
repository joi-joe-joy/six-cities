import {SortType} from "./const";

export const sortOffers = (sortType, offers) => {
  const preparedOffers = offers.slice(0);
  switch (sortType) {
    case SortType.POPULAR:
      return preparedOffers;
    case SortType.TO_HIGH:
      return preparedOffers.sort((a, b) => a.price - b.price);
    case SortType.TO_LOW:
      return preparedOffers.sort((a, b) => a.price - b.price).reverse();
    case SortType.TOP_RATED:
      return preparedOffers.sort((a, b) => a.rating - b.rating).reverse();
    default:
      return preparedOffers;
  }
};
