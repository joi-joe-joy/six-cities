import React, {PureComponent} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history.js";
import {AuthStatus, AppRoute} from "../../const.js";
import {getAuthStatus, getIsLoading} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {isFavoritesExist} from "../../reducer/favorite/selectors.js";
import PrivateRoute from "../private-route/private-route";
import Favorites from "../favorites/favorites";
import Property from "../property/property";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import Main from "../main/main";
import Login from "../login/login";
import pt from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {login, authorizationStatus, favoritesExist, isLoading} = this.props;

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
  }
}

App.propTypes = {
  login: pt.func.isRequired,
  authorizationStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired,
  favoritesExist: pt.bool,
  isLoading: pt.bool.isRequired
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
