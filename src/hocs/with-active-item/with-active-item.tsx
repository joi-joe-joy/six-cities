import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/place/place.js";
import pt from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: null
      };
      this.handleCardActivate = this.handleCardActivate.bind(this);
      this.handleCardDeactivate = this.handleCardDeactivate.bind(this);
    }

    handleCardActivate(card) {
      const {changeHoverCard} = this.props;
      if (this.state.activeCard !== card) {
        this.setState({
          activeCard: card
        });
        changeHoverCard(card);
      }
    }

    handleCardDeactivate() {
      const {changeHoverCard} = this.props;
      this.setState({
        activeCard: null
      });
      changeHoverCard();
    }

    render() {
      const {activeCard} = this.state;
      return (
        <Component
          {...this.props}
          activeCard={activeCard}
          onCardHover={this.handleCardActivate}
          onCardHoverOut={this.handleCardDeactivate}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    changeHoverCard: pt.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    changeHoverCard(card) {
      dispatch(ActionCreator.changeHoverCard(card));
    }
  });

  return connect(undefined, mapDispatchToProps)(WithActiveItem);
};

export default withActiveItem;
