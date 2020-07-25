import {extend} from "../../utils";
import {SortType} from "../../types";

const initialState = {
  sorting: SortType.POPULAR,
  hoverCard: null
};

const ActionType = {
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_HOVER_CARD: `CHANGE_HOVER_CARD`
};

const ActionCreator = {
  changeSorting: (sorting) => {
    return {
      type: ActionType.CHANGE_SORTING,
      payload: sorting ? sorting : SortType.POPULAR
    };
  },
  changeHoverCard: (card) => {
    return {
      type: ActionType.CHANGE_HOVER_CARD,
      payload: card ? card : null
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        sorting: action.payload
      });
    case ActionType.CHANGE_HOVER_CARD:
      return extend(state, {
        hoverCard: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
