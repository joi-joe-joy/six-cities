import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Property from "../property/property";
import pt from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: null
    };
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(card) {
    this.setState({
      currentCard: card
    });
  }

  _renderApp() {
    const {offers} = this.props;

    if (this.state.currentCard) {
      return (
        <Property
          onCardClick={this.onCardClick}
          offer={this.state.currentCard}
        />
      );
    } else {
      return (
        <Main
          offers={offers}
          onCardClick={this.onCardClick}
        />
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
              onCardClick={this.onCardClick}
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: pt.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offersCityList
});

export {App};
export default connect(mapStateToProps)(App);
