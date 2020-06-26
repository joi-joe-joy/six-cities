import React, {PureComponent} from "react";
import IconBookmark from "../../Icons/icon-bookmark.svg";
import pt from "prop-types";
import {HouseType, HouseTypeTemplate} from "../../const.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardHover(card) {
    this.props.onCardHover(card);
  }

  handleCardClick(event, card) {
    event.preventDefault();
    this.props.onCardClick(card);
  }

  render() {
    const {offer, onBookmarkClick, classNames} = this.props;

    return (
      <article className={`place-card ${classNames && classNames.card}`}
        onMouseOver={this.handleCardHover.bind(this, offer)}>
        {offer.premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className={`${classNames && classNames.imgWrap} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={offer.pictures[0]} width="260" height="200" alt={offer.title}></img>
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
              <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a onClick={(e) => this.handleCardClick(e, offer)}>{offer.title}</a>
          </h2>
          <p className="place-card__type">{HouseTypeTemplate[offer.type]}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: pt.shape({
    title: pt.string.isRequired,
    premium: pt.bool.isRequired,
    pictures: pt.arrayOf(pt.string).isRequired,
    price: pt.number.isRequired,
    rating: pt.number.isRequired,
    type: pt.oneOf([HouseType.APARTMENT, HouseType.ROOM, HouseType.HOUSE, HouseType.HOTEL])
  }).isRequired,
  onBookmarkClick: pt.func.isRequired,
  onCardHover: pt.func.isRequired,
  onCardClick: pt.func.isRequired,
  classNames: pt.shape({
    card: pt.string,
    imgWrap: pt.string
  }),
};

export default PlaceCard;
