import {extend} from "../../utils.js";
import {AuthStatus} from "../../const.js";

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTH,
  authInfo: null
};

const ActionType = {
  REQUIRE_AUTH_STATUS: `REQUIRE_AUTH_STATUS`,
  GET_AUTH_INFO: `GET_AUTH_INFO`,
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
    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((res) => {
        dispatch(ActionCreator.getAuthInfo(res.data));
        dispatch(ActionCreator.requireAuthStatus(AuthStatus.AUTH));
      })
      .catch((err) => {
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
      })
      .catch((err) => {
        throw err;
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation};
