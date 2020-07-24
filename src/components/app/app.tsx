import * as React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history";
import {AppRoute} from "../../const";
import {AuthStatus} from "../../types";
import {getAuthStatus, getIsLoading} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import {isFavoritesExist} from "../../reducer/favorite/selectors";
import PrivateRoute from "../private-route/private-route";
import Favorites from "../favorites/favorites";
import Property from "../property/property";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import Main from "../main/main";
import Login from "../login/login";

interface Props {
  login: () => void;
  authorizationStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  favoritesExist: boolean;
  isLoading: boolean;
}

const App: React.FC<Props> = (props: Props) => {
  const {login, authorizationStatus, favoritesExist, isLoading} = props;

  if (isLoading) {
    return null;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={Main}/>
        <Route exact path={AppRoute.OFFER_ID} component={Property}/>
        <PrivateRoute exact path={AppRoute.FAVORITES}
          render={() => {
            if (favoritesExist) {
              return <Favorites/>;
            }
            return <FavoritesEmpty/>;
          }}
        />
        <Route exact path={AppRoute.LOGIN}
          render={() => {
            return (
              authorizationStatus === AuthStatus.NO_AUTH
                ? <Login onSubmit={login}/>
                : <Redirect to={AppRoute.MAIN}/>
            );
          }}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
  favoritesExist: isFavoritesExist(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
