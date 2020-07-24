import * as React from 'react';
import {connect} from "react-redux";
import history from "../../history";
import {AppRoute} from "../../const";
import {AuthStatus, Offer, PlaceCardType} from "../../types";
import {Operation as FavoriteOperation} from "../../reducer/favorite/favorite";
import {getAuthStatus} from "../../reducer/user/selectors";

interface Props {
  toggleFavorite: ({hotelId, status}: {hotelId: number; status: boolean}) => void;
  offer: Offer;
  authStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  type: PlaceCardType.CITIES | PlaceCardType.NEAR | PlaceCardType.FAVORITES | PlaceCardType.PROPERTY;
}

interface State {
  isFavorite: boolean;
}

const withFavorite = (Component) => {
  class WithFavorite extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        isFavorite: props.offer.isFavorite
      };
      this.handleButtonBookClick = this.handleButtonBookClick.bind(this);
    }

    handleButtonBookClick() {
      const {toggleFavorite, offer, authStatus} = this.props;

      if (authStatus === AuthStatus.AUTH) {
        toggleFavorite({
          hotelId: offer.id,
          status: !this.state.isFavorite
        });
        this.setState((state) => {
          return {
            isFavorite: !state.isFavorite
          };
        });
      } else {
        history.push(AppRoute.LOGIN);
      }
    }

    render() {
      const {isFavorite} = this.state;
      return (
        <Component
          {...this.props}
          isFavorite={isFavorite}
          onToggleFavorite={this.handleButtonBookClick}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleFavorite(data) {
      dispatch(FavoriteOperation.toggleFavorite(data));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFavorite);
};

export default withFavorite;
