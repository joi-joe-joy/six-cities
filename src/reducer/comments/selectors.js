import {NameSpace} from "../name-space";
import {renameKeys} from "../../utils";

const NAME_SPACE = NameSpace.COMMENTS;

export const getComments = (state) => {
  const comments = state[NAME_SPACE].comments.slice(0);
  const newComments = [];
  comments.forEach((comment) => {
    newComments.push(renameKeys(comment));
  });
  return newComments;
};

export const getIsLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};

export const getErrorText = (state) => {
  return state[NAME_SPACE].error;
};
