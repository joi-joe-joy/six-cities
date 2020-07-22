import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {HouseType, HouseTypeTemplate, PlaceCardType, AppRoute} from "../../const.js";
import withFavorite from "../../hocs/with-favorite/with-favorite.js";
import ButtonFavorite from "../button-favorite/button-favorite";
import classnames from "classnames";
import pt from "prop-types";

const ButtonFavoriteWrap = withFavorite(ButtonFavorite);

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardHoverOut = this.handleCardHoverOut.bind(this);
  }

  handleCardHover() {
    const {offer, onCardHover} = this.props;
    if (onCardHover) {
      onCardHover(offer);
    }
  }

  handleCardHoverOut() {
    const {onCardHoverOut} = this.props;
    if (onCardHoverOut) {
      onCardHoverOut();
    }
  }

  render() {
    const {offer, type} = this.props;
    const classNamesCard = classnames(`place-card`, {
      'cities__place-card': type === PlaceCardType.CITIES,
      'near-places__card': type === PlaceCardType.NEAR,
      'favorites__card': type === PlaceCardType.FAVORITES,
    });
    const classNamesImgWrap = classnames(`place-card__image-wrapper`, {
      'cities__image-wrapper': type === PlaceCardType.CITIES,
      'near-places__image-wrapper': type === PlaceCardType.NEAR,
      'favorites__image-wrapper': type === PlaceCardType.FAVORITES,
    });
    const classNamesInfo = classnames(`place-card__info`, {
      'favorites__card-info': type === PlaceCardType.FAVORITES,
    });

    return (
      <article className={classNamesCard}
        onMouseOver={this.handleCardHover}
        onMouseOut={this.handleCardHoverOut}
      >
        {offer.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className={classNamesImgWrap}>
          <a href="#">
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title}></img>
          </a>
        </div>
        <div className={classNamesInfo}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <ButtonFavoriteWrap
              offer={offer}
            />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`${AppRoute.OFFER}/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{HouseTypeTemplate[offer.type]}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: pt.shape({
    id: pt.number.isRequired,
    title: pt.string.isRequired,
    isPremium: pt.bool,
    isFavorite: pt.bool,
    previewImage: pt.string,
    price: pt.number.isRequired,
    rating: pt.number.isRequired,
    type: pt.oneOf([HouseType.APARTMENT, HouseType.ROOM, HouseType.HOUSE, HouseType.HOTEL])
  }).isRequired,
  onCardHover: pt.func,
  onCardHoverOut: pt.func,
  type: pt.string.isRequired
};

export default PlaceCard;
