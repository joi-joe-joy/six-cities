import * as React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {HouseTypeTemplate, AppRoute} from "../../const";
import {PlaceCardType, Offer} from "../../types";
import ButtonFavorite from "../button-favorite/button-favorite";

interface Props {
  offer: Offer;
  onCardHover?: (offer: Offer) => void;
  onCardHoverOut?: () => void;
  type: PlaceCardType.CITIES | PlaceCardType.FAVORITES | PlaceCardType.NEAR | PlaceCardType.PROPERTY;
}

const PlaceCard: React.FC<Props> = (props: Props) => {
  const {offer, type, onCardHover, onCardHoverOut} = props;
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

  const handleCardHover = () => {
    if (onCardHover) {
      onCardHover(offer);
    }
  };

  return (
    <article className={classNamesCard}
      onMouseOver={handleCardHover}
      onMouseOut={onCardHoverOut}
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
          <ButtonFavorite
            offer={offer}
            type={type}
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
};

export default PlaceCard;
