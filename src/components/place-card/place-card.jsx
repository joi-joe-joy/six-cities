import React, {PureComponent} from "react";
import IconBookmark from "../../Icons/icon-bookmark.svg";
import pt from "prop-types";
import {HouseType} from "../../const.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(card) {
    this.props.onCardHover(card);
  }

  render() {
    const {offer, onBookmarkClick} = this.props;

    return (
      <article className="cities__place-card place-card"
        onMouseOver={this.handleCardHover.bind(this, offer)}>
        {offer.premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.picture} width="260" height="200" alt={offer.title}></img>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              onClick={onBookmarkClick}
              className="place-card__bookmark-button button"
              type="button">
              <IconBookmark width="17" height="18" />
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${offer.rating * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: pt.shape({
    title: pt.string.isRequired,
    premium: pt.bool.isRequired,
    picture: pt.string.isRequired,
    price: pt.number.isRequired,
    rating: pt.number.isRequired,
    type: pt.oneOf([HouseType.APARTMENT, HouseType.ROOM, HouseType.HOUSE, HouseType.HOTEL])
  }).isRequired,
  onBookmarkClick: pt.func.isRequired,
  onCardHover: pt.func.isRequired
};

export default PlaceCard;
