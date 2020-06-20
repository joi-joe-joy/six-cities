import React, {PureComponent} from "react";
import Main from "../main/main";
import pt from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Property from "../property/property";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: null
    };
    this.onLocationClick = this.onLocationClick.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  onLocationClick() {}

  onCardClick(card) {
    this.setState({
      currentCard: card
    });
  }

  _renderApp() {
    const {rentCount, offers} = this.props;

    if (this.state.currentCard) {
      return (
        <Property
          offer={this.state.currentCard}
        />
      );
    } else {
      return (
        <Main
          rentCount={rentCount}
          offers={offers}
          onLocationClick={this.onLocationClick}
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
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  rentCount: pt.number.isRequired,
  offers: pt.array.isRequired
};

export default App;
