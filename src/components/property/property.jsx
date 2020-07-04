import React from "react";
import IconBookmark from "../../Icons/icon-bookmark.svg";
import ReviewsList from "../rewiews-list/reviews-list";
import {HouseType, HouseTypeTemplate} from "../../const.js";
import IconStar from "../../Icons/icon-star.svg";
import PlacesList from "../places-list/places-list";
import {MapType} from "../../const";
import withMap from "../../hocs/with-map/with-map";
import {PlaceCardType} from "../../const";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Map from "../map/map";
import pt from "prop-types";

const MapWrap = withMap(Map);
const PlacesListWrap = withActiveItem(PlacesList);

const Property = (props) => {
  const {offer} = props;
  const nearOfferCords = offer.nearOffers.map((item) => item.coordinations);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.pictures.map((picture, i) => (
              <div key={`${picture}-${i}`} className="property__image-wrapper">
                <img className="property__image" src={picture} alt={offer.title}></img>
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.premium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <IconBookmark width="31" height="33" />
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${offer.rating * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {HouseTypeTemplate[offer.type]}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} {offer.bedrooms.length > 1 ? `Bedrooms` : `Bedroom`}
              </li>
              <li className="property__feature property__feature--adults">
                {offer.maxGuestsNumber}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.amenities.map((amenity) => (
                  <li key={amenity} className="property__inside-item">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.super ? `property__avatar-wrapper--pro` : ``}`}>
                  <img className="property__avatar user__avatar"
                    src={offer.host.photo ? offer.host.photo : `img/avatar.svg`}
                    width="74" height="74" alt="Host avatar"></img>
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
              </div>
              <div className="property__description">
                {offer.description.split(`\n`).map((paragraph, i) => (
                  <p key={`${paragraph.slice(0, 10)}-${i}`} className="property__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot;
                <span className="reviews__amount">{offer.reviews.length}</span>
              </h2>
              <ReviewsList reviews={offer.reviews}/>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"></input>
                  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <IconStar width="37" height="33"/>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"></input>
                  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <IconStar width="37" height="33"/>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"></input>
                  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <IconStar width="37" height="33"/>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"></input>
                  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <IconStar width="37" height="33"/>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"></input>
                  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <IconStar width="37" height="33"/>
                  </label>
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <MapWrap
          type={MapType.PROPERTY}
          offersCords={nearOfferCords}
          currentCords={offer.coordinations}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesListWrap
            type={PlaceCardType.NEAR}
            offers={offer.nearOffers}
          />
        </section>
      </div>
    </main>
  );
};

Property.propTypes = {
  offer: pt.shape({
    title: pt.string.isRequired,
    maxGuestsNumber: pt.string.isRequired,
    description: pt.string.isRequired,
    premium: pt.bool.isRequired,
    pictures: pt.arrayOf(pt.string).isRequired,
    amenities: pt.arrayOf(pt.string).isRequired,
    price: pt.number.isRequired,
    rating: pt.number.isRequired,
    bedrooms: pt.number.isRequired,
    type: pt.oneOf([HouseType.APARTMENT, HouseType.ROOM, HouseType.HOUSE, HouseType.HOTEL]),
    host: pt.shape({
      photo: pt.string,
      name: pt.string.isRequired,
      super: pt.bool.isRequired
    }).isRequired,
    coordinations: pt.arrayOf(pt.number).isRequired,
    reviews: pt.array.isRequired,
    nearOffers: pt.array.isRequired
  }).isRequired,
};

export default Property;
