import {NameSpace} from "../name-space";

const NAME_SPACE = NameSpace.PLACE;

export const getSorting = (state) => {
  return state[NAME_SPACE].sorting;
};

export const getHoverCard = (state) => {
  return state[NAME_SPACE].hoverCard;
};
