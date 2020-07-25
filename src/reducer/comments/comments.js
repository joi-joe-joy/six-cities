import {extend} from "../../utils";

const initialState = {
  comments: [],
  isLoading: false,
  error: ``
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  SET_LOADING: `SET_COMMENTS_LOADING`,
  SET_ERROR: `SET_COMMENT_ERROR`
};

const ActionCreator = {
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  },
  setLoading: (status) => {
    return {
      type: ActionType.SET_LOADING,
      payload: status
    };
  },
  setError: (payload) => {
    return {
      type: ActionType.SET_ERROR,
      payload
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
        isLoading: false
      });
    case ActionType.SET_LOADING:
      return extend(state, {
        isLoading: action.payload
      });
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload
      });
    default:
      return state;
  }
};

const Operation = {
  sendComment: (commentData, hotelId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoading(true));
    return api.post(`/comments/${hotelId}`, {
      comment: commentData.comment,
      rating: commentData.rating
    })
      .then((res) => {
        dispatch(ActionCreator.loadComments(res.data));
        dispatch(ActionCreator.setError(``));
      })
      .catch((err) => {
        dispatch(ActionCreator.setLoading(false));
        dispatch(ActionCreator.setError(err.response.data.error));
      });
  },
  loadComments: (hotelId) => (dispatch, getState, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((res) => {
        dispatch(ActionCreator.loadComments(res.data));
      })
      .catch((err) => {
        throw err;
      });
  }
};

export {reducer, ActionType, ActionCreator, Operation};
