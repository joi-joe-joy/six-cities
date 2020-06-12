import React from "react";
import IconBookmark from "../../img/icon-bookmark.svg";
import pt from 'prop-types';

export const PlaceCard = (props) => {
  const {title = ``} = props;

  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"></img>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;120</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <img src={IconBookmark} alt=""/>
          {/* <IconBookmark/> */}
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: 80 + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">Apartment</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  title: pt.string.isRequired
};
