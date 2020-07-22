import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import history from "./history.js";
import {createAPI} from "./api.js";
import App from "./components/app/app";
import {AuthStatus, AppRoute} from "./const.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as FavoriteOperation} from "./reducer/favorite/favorite.js";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";
import reducer from "./reducer/reducer.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthStatus(AuthStatus.NO_AUTH));
  history.push(AppRoute.LOGIN);
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());
store.dispatch(FavoriteOperation.loadFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
