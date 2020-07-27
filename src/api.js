import axios from "axios";
import {ErrorType} from "./const";

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response) {
      switch (response.status) {
        case ErrorType.UNAUTHORIZED:
          onUnauthorized();
          throw err;
        case ErrorType.BAD_REQUEST:
          throw err;
        default:
          throw err;
      }
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


