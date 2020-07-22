import {NameSpace} from "../name-space";

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

export const getIsLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};
