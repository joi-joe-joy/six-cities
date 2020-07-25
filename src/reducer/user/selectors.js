import {NameSpace} from "../name-space";
import {renameKeys} from "../../utils";

const NAME_SPACE = NameSpace.USER;

export const getAuthStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthInfo = (state) => {
  const info = state[NAME_SPACE].authInfo;
  let newInfo = {};
  if (info) {
    newInfo = renameKeys(info);
  }
  return newInfo;
};

export const getIsLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};

export const getErrorText = (state) => {
  return state[NAME_SPACE].errorText;
};
