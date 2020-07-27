import * as React from 'react';
import IconBookmark from "../../Icons/icon-bookmark.svg";
import {connect} from "react-redux";
import history from "../../history";
import classnames from "classnames";
import {AppRoute} from "../../const";
import {AuthStatus, Offer, PlaceCardType} from "../../types";
import {Operation as FavoriteOperation} from "../../reducer/favorite/favorite";
import {ActionCreator} from "../../reducer/data/data";
import {getAuthStatus} from "../../reducer/user/selectors";

interface Props {
  offer: Offer;
  onToggleFavorite: ({hotelId, status}: {hotelId: number; status: boolean}, offer: Offer) => void;
  authStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  type: PlaceCardType.CITIES | PlaceCardType.NEAR | PlaceCardType.FAVORITES | PlaceCardType.PROPERTY;
}

const ButtonFavorite: React.FC<Props> = (props: Props) => {
  const {onToggleFavorite, type, authStatus, offer} = props;
  const buttonClassName = classnames(`button`, {
    'place-card__bookmark-button': type !== PlaceCardType.PROPERTY,
    'property__bookmark-button': type === PlaceCardType.PROPERTY
  });

  const handleButtonBookClick = () => {
    if (authStatus === AuthStatus.AUTH) {
      offer.isFavorite = !offer.isFavorite;
      onToggleFavorite({
        hotelId: offer.id,
        status: offer.isFavorite
      }, offer);
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

  return (
    <button
      onClick={handleButtonBookClick}
      className={buttonClassName}
      type="button">
      <IconBookmark width="17" height="18" style={{fill: offer.isFavorite ? `#ff9000` : `#000000`}}/>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onToggleFavorite(data, offer) {
    dispatch(FavoriteOperation.toggleFavorite(data));
    dispatch(ActionCreator.changeFavorite(offer));
  }
});

export {ButtonFavorite};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonFavorite);
