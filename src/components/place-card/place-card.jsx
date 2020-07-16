import React, {PureComponent} from "react";
import IconBookmark from "../../Icons/icon-bookmark.svg";
import {Link} from "react-router-dom";
import {HouseType, HouseTypeTemplate, PlaceCardType, AppRoute} from "../../const.js";
import classnames from "classnames";
import pt from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardHoverOut = this.handleCardHoverOut.bind(this);
  }

  handleCardHover() {
    const {offer, onCardHover} = this.props;
    onCardHover(offer);
  }

  handleCardHoverOut() {
    const {onCardHoverOut} = this.props;
    onCardHoverOut();
  }

  render() {
    const {offer, type, isFavorite, onToggleFavorite} = this.props;
    const classNamesCard = classnames(`place-card`, {
      'cities__place-card': type === PlaceCardType.CITIES,
      'near-places__card': type === PlaceCardType.NEAR
    });
    const classNamesImgWrap = classnames(`place-card__image-wrapper`, {
      'cities__image-wrapper': type === PlaceCardType.CITIES,
      'near-places__image-wrapper': type === PlaceCardType.NEAR
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
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              onClick={onToggleFavorite}
              className="place-card__bookmark-button button"
              type="button">
              <IconBookmark width="17" height="18" style={{fill: isFavorite ? `#ff9000` : `#000000`}}/>
              <span className="visually-hidden">To bookmarks</span>
            </button>
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
  isFavorite: pt.bool.isRequired,
  onToggleFavorite: pt.func.isRequired,
  onCardHover: pt.func.isRequired,
  onCardHoverOut: pt.func.isRequired,
  type: pt.string.isRequired
};

export default PlaceCard;
