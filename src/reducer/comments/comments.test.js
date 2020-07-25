import {reducer, ActionType, ActionCreator} from "./comments";

const comments = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
}];

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      comments: [],
      isLoading: false,
      error: ``
    });
  });

  it(`Reducer should change comments by a given value`, () => {
    expect(reducer({
      comments: [],
      isLoading: false,
      error: ``
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    })).toEqual({
      comments,
      isLoading: false,
      error: ``
    });
  });

  it(`Reducer should not change comments by the same given value`, () => {
    expect(reducer({
      comments,
      isLoading: false,
      error: ``
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    })).toEqual({
      comments,
      isLoading: false,
      error: ``
    });
  });

  it(`Reducer should change isLoading by a given value`, () => {
    expect(reducer({
      comments: [],
      isLoading: false,
      error: ``
    }, {
      type: ActionType.SET_LOADING,
      payload: true
    })).toEqual({
      comments: [],
      isLoading: true,
      error: ``
    });
  });

  it(`Reducer should not change isLoading by the same given value`, () => {
    expect(reducer({
      comments,
      isLoading: false,
      error: ``
    }, {
      type: ActionType.SET_LOADING,
      payload: false
    })).toEqual({
      comments,
      isLoading: false,
      error: ``
    });
  });

  it(`Reducer should change error by a given value`, () => {
    expect(reducer({
      comments: [],
      isLoading: false,
      error: ``
    }, {
      type: ActionType.SET_ERROR,
      payload: `text`
    })).toEqual({
      comments: [],
      isLoading: false,
      error: `text`
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load comments returns correct action`, () => {
    expect(ActionCreator.loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    });
  });

  it(`Action creator for set loading returns correct action`, () => {
    expect(ActionCreator.setLoading(false)).toEqual({
      type: ActionType.SET_LOADING,
      payload: false,
    });
  });

  it(`Action creator for set error returns correct action`, () => {
    expect(ActionCreator.setError(`text`)).toEqual({
      type: ActionType.SET_ERROR,
      payload: `text`,
    });
  });
});
