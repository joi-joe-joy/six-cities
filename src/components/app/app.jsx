import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthStatus, AppRoute} from "../../const.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import PrivateRoute from "../private-route/private-route";
import {Favorites} from "../favorites/favorites";
import Property from "../property/property";
import Main from "../main/main";
import Login from "../login/login";
import pt from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {login, authorizationStatus} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.MAIN} component={Main}/>
          <Route exact path={AppRoute.OFFER_ID} component={Property}/>
          <Route exact path={AppRoute.LOGIN}
            render={() => {
              return (
                authorizationStatus === AuthStatus.NO_AUTH
                  ? <Login onSubmit={login}/>
                  : <Redirect to={AppRoute.MAIN}/>
              );
            }}
          />
          <PrivateRoute exact path={AppRoute.FAVORITES}
            render={() => {
              return <Favorites/>;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  login: pt.func.isRequired,
  authorizationStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
