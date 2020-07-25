import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import history from "./history";
import {createAPI} from "./api";
import App from "./components/app/app";
import {AppRoute} from "./const";
import {AuthStatus} from "./types";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as FavoriteOperation} from "./reducer/favorite/favorite";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user";
import reducer from "./reducer/reducer";

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
