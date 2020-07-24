import {extend} from "../../utils";
import {AuthStatus} from "../../types";

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTH,
  authInfo: null,
  isLoading: false,
  errorText: ``
};

const ActionType = {
  REQUIRE_AUTH_STATUS: `REQUIRE_AUTH_STATUS`,
  GET_AUTH_INFO: `GET_AUTH_INFO`,
  SET_LOADING: `SET_USER_LOADING`,
  GET_ERROR_LOGIN: `GET_ERROR_LOGIN`
};

const ActionCreator = {
  requireAuthStatus: (status) => {
    return {
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: status
    };
  },
  getAuthInfo: (info) => {
    return {
      type: ActionType.GET_AUTH_INFO,
      payload: info
    };
  },
  setLoading: (status) => {
    return {
      type: ActionType.SET_LOADING,
      payload: status
    };
  },
  getErrorLogin: (payload) => {
    return {
      type: ActionType.GET_ERROR_LOGIN,
      payload
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH_STATUS:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.GET_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload
      });
    case ActionType.SET_LOADING:
      return extend(state, {
        isLoading: action.payload
      });
    case ActionType.GET_ERROR_LOGIN:
      return extend(state, {
        errorText: action.payload
      });
    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoading(true));
    return api.get(`/login`)
      .then((res) => {
        dispatch(ActionCreator.getAuthInfo(res.data));
        dispatch(ActionCreator.requireAuthStatus(AuthStatus.AUTH));
        dispatch(ActionCreator.setLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setLoading(false));
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((res) => {
        dispatch(ActionCreator.requireAuthStatus(AuthStatus.AUTH));
        dispatch(ActionCreator.getAuthInfo(res.data));
        dispatch(ActionCreator.getErrorLogin(``));
      })
      .catch((err) => {
        dispatch(ActionCreator.getErrorLogin(err.response.data.error));
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation};
