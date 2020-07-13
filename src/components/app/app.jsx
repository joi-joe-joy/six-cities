import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {AuthStatus} from "../../const.js";
import {getOffersCityList, getCity} from "../../reducer/data/selectors.js";
import {getCurrentCard} from "../../reducer/place/selectors.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import Main from "../main/main";
import Property from "../property/property";
import Login from "../login/login";
import pt from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentCard, city, authorizationStatus, login} = this.props;
    if (authorizationStatus === AuthStatus.AUTH) {
      if (currentCard) {
        return (
          <Property
            city={city}
            offer={currentCard}
            authStatus={authorizationStatus}
          />
        );
      } else {
        return (
          <Main/>
        );
      }
    } else if (authorizationStatus === AuthStatus.NO_AUTH) {
      return (
        <Login
          onSubmit={login}
        />
      );
    }

    return null;
  }

  render() {
    const {offers, city, login, authorizationStatus} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
              city={city}
              offer={offers[0]}
              authStatus={authorizationStatus}
            />
          </Route>
          <Route exact path="/dev-auth">
            <Login
              onSubmit={login}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: pt.array.isRequired,
  currentCard: pt.any,
  city: pt.shape({
    name: pt.string.isRequired,
    location: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }).isRequired
  }),
  login: pt.func.isRequired,
  authorizationStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffersCityList(state),
  currentCard: getCurrentCard(state),
  city: getCity(state),
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
