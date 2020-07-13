import {NameSpace} from "../name-space.js";

const NAME_SPACE = NameSpace.COMMENTS;

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};
