import {NameSpace} from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};
