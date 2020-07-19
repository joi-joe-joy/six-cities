import {NameSpace} from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthInfo = (state) => {
  const info = state[NAME_SPACE].authInfo;
  if (info) {
    info.avatarUrl = info.avatar_url;
  }
  return info;
};
