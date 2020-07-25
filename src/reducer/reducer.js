import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as place} from "./place/place";
import {reducer as user} from "./user/user";
import {reducer as comments} from "./comments/comments";
import {reducer as favorite} from "./favorite/favorite";
import {NameSpace} from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PLACE]: place,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.FAVORITE]: favorite,
});
