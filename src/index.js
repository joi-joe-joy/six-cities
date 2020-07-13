import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import App from "./components/app/app";
import reducer from "./reducer/reducer.js";
import {AuthStatus} from "./const.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthStatus(AuthStatus.NO_AUTH));
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

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
