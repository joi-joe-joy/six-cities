import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Property from "../property/property";
import pt from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentCard} = this.props;
    if (currentCard) {
      return (
        <Property
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
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
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
  currentCard: pt.any
};

const mapStateToProps = (state) => ({
  offers: state.offersCityList,
  currentCard: state.currentCard
});

export {App};
export default connect(mapStateToProps)(App);
