import * as React from 'react';
import {connect} from "react-redux";
import {Subtract} from "utility-types";
import {ActionCreator} from "../../reducer/place/place";
import {Offer} from '../../types';

interface InjectingProps {
  changeHoverCard: (card?: Offer) => void
}

interface State {
  activeCard: Offer
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
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

  const mapDispatchToProps = (dispatch) => ({
    changeHoverCard(card) {
      dispatch(ActionCreator.changeHoverCard(card));
    }
  });

  return connect(undefined, mapDispatchToProps)(WithActiveItem);
};

export default withActiveItem;
