import * as React from 'react';
import {connect} from "react-redux";
import history from "../../history";
import {AppRoute} from "../../const";
import {AuthStatus, Offer, PlaceCardType} from "../../types";
import {Operation as FavoriteOperation} from "../../reducer/favorite/favorite";
import {ActionCreator} from "../../reducer/data/data";
import {getAuthStatus} from "../../reducer/user/selectors";

interface Props {
  onToggleFavorite: ({hotelId, status}: {hotelId: number; status: boolean}, offer: Offer) => void;
  offer: Offer;
  authStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  type: PlaceCardType.CITIES | PlaceCardType.NEAR | PlaceCardType.FAVORITES | PlaceCardType.PROPERTY;
}

const withFavorite = (Component) => {
  class WithFavorite extends React.PureComponent<Props, {}> {
    constructor(props) {
      super(props);
      this.handleButtonBookClick = this.handleButtonBookClick.bind(this);
    }

    handleButtonBookClick() {
      const {onToggleFavorite, offer, authStatus} = this.props;

      if (authStatus === AuthStatus.AUTH) {
        offer.isFavorite = !offer.isFavorite;
        onToggleFavorite({
          hotelId: offer.id,
          status: offer.isFavorite
        }, offer);
      } else {
        history.push(AppRoute.LOGIN);
      }
    }

    render() {
      const {offer} = this.props;
      return (
        <Component
          {...this.props}
          isFavorite={offer.isFavorite}
          onToggleFavorite={this.handleButtonBookClick}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onToggleFavorite(data, offer) {
      dispatch(FavoriteOperation.toggleFavorite(data));
      dispatch(ActionCreator.changeFavorite(offer));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFavorite);
};

export default withFavorite;
