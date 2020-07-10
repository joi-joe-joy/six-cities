import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as place} from "./place/place.js";
import {NameSpace} from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PLACE]: place,
});
