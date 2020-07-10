import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Property from "../property/property";
import {getOffersCityList, getCity} from "../../reducer/data/selectors.js";
import {getCurrentCard} from "../../reducer/place/selectors.js";
import pt from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentCard, city} = this.props;
    if (currentCard) {
      return (
        <Property
          city={city}
          offer={currentCard}
        />
      );
    } else {
      return (
        <Main/>
      );
    }
  }

  render() {
    const {offers, city} = this.props;
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
};

const mapStateToProps = (state) => ({
  offers: getOffersCityList(state),
  currentCard: getCurrentCard(state),
  city: getCity(state)
});

export {App};
export default connect(mapStateToProps)(App);
