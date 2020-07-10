import {extend} from "../../utils.js";
import {SortType} from "../../const";

const initialState = {
  currentCard: null,
  sorting: SortType.POPULAR,
  hoverCard: null
};

const ActionType = {
  CHANGE_CARD: `CHANGE_CARD`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_HOVER_CARD: `CHANGE_HOVER_CARD`
};

const ActionCreator = {
  changeCard: (card) => {
    return {
      type: ActionType.CHANGE_CARD,
      payload: card
    };
  },
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
    case ActionType.CHANGE_CARD:
      return extend(state, {
        currentCard: action.payload
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        sorting: action.payload
      });
    case ActionType.CHANGE_HOVER_CARD:
      return extend(state, {
        hoverCard: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
