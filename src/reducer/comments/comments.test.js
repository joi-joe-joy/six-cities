import {reducer, ActionType, ActionCreator} from "./comments.js";

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
      comments: []
    });
  });

  it(`Reducer should change comments by a given value`, () => {
    expect(reducer({
      comments: []
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    })).toEqual({
      comments
    });
  });

  it(`Reducer should not change comments by the same given value`, () => {
    expect(reducer({
      comments
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    })).toEqual({
      comments
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
});
