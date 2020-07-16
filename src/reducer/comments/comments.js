import {extend} from "../../utils.js";

const initialState = {
  comments: []
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    default:
      return state;
  }
};

const Operation = {
  sendComment: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments`, {
      comment: commentData.comment,
      rating: commentData.rating
    })
      .then((res) => {
        dispatch(ActionCreator.loadComments(res.data));
      });
  }
};

export {reducer, ActionType, ActionCreator, Operation};
