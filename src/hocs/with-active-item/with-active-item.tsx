import * as React from 'react';
import {connect} from "react-redux";
import {Subtract} from "utility-types";
import {ActionCreator} from "../../reducer/place/place";
import {Offer} from '../../types';

interface InjectingProps {
  onChangeHoverCard: (card?: Offer) => void;
}

interface State {
  activeCard: Offer;
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
      const {onChangeHoverCard} = this.props;
      if (this.state.activeCard !== card) {
        this.setState({
          activeCard: card
        });
        onChangeHoverCard(card);
      }
    }

    handleCardDeactivate() {
      const {onChangeHoverCard} = this.props;
      this.setState({
        activeCard: null
      });
      onChangeHoverCard();
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
    onChangeHoverCard(card) {
      dispatch(ActionCreator.changeHoverCard(card));
    }
  });

  return connect(undefined, mapDispatchToProps)(WithActiveItem);
};

export default withActiveItem;
