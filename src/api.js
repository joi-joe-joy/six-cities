import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

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

    switch (response.status) {
      case Error.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case Error.BAD_REQUEST:
        onUnauthorized();
        throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


