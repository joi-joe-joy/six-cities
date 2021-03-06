import {reducer, ActionType, ActionCreator} from "./user";
import {AuthStatus} from "../../types";

const userInfo = {
  avatarUrl: `/static/avatar/7.jpg`,
  email: `joi.joe.joy@mail.ru`,
  id: 1,
  isPro: false,
  name: `joi.joe.joy`
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    });
  });

  it(`Reducer should change auth status by given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    }, {
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: AuthStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthStatus.AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    });
  });

  it(`Reducer should not change auth status by the same given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    }, {
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: AuthStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    });
  });

  it(`Reducer should change auth info by given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    }, {
      type: ActionType.GET_AUTH_INFO,
      payload: userInfo
    })).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: userInfo,
      isLoading: false,
      errorText: ``
    });
  });

  it(`Reducer should change isLoading by given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    }, {
      type: ActionType.SET_LOADING,
      payload: true
    })).toEqual({
      authorizationStatus: AuthStatus.AUTH,
      authInfo: null,
      isLoading: true,
      errorText: ``
    });
  });

  it(`Reducer should not change isLoading by the same given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    }, {
      type: ActionType.SET_LOADING,
      payload: false
    })).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    });
  });

  it(`Reducer should change error text by given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.AUTH,
      authInfo: null,
      isLoading: false,
      errorText: ``
    }, {
      type: ActionType.GET_ERROR_LOGIN,
      payload: `text`
    })).toEqual({
      authorizationStatus: AuthStatus.AUTH,
      authInfo: null,
      isLoading: false,
      errorText: `text`
    });
  });

  it(`Reducer should not change error text by the same given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: `text`
    }, {
      type: ActionType.GET_ERROR_LOGIN,
      payload: `text`
    })).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null,
      isLoading: false,
      errorText: `text`
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change auth status returns correct action`, () => {
    expect(ActionCreator.requireAuthStatus(`AUTH`)).toEqual({
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: `AUTH`,
    });
  });

  it(`Action creator for change auth info returns correct action`, () => {
    expect(ActionCreator.getAuthInfo(userInfo)).toEqual({
      type: ActionType.GET_AUTH_INFO,
      payload: userInfo,
    });
  });

  it(`Action creator for change loading status returns correct action`, () => {
    expect(ActionCreator.setLoading(false)).toEqual({
      type: ActionType.SET_LOADING,
      payload: false,
    });
  });

  it(`Action creator for get error returns correct action`, () => {
    expect(ActionCreator.getErrorLogin(`text`)).toEqual({
      type: ActionType.GET_ERROR_LOGIN,
      payload: `text`,
    });
  });
});

