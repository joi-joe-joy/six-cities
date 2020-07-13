import React from "react";
import {HouseType, HouseTypeTemplate, PageType, PlaceCardType, AuthStatus} from "../../const.js";
import IconBookmark from "../../Icons/icon-bookmark.svg";
import IconStar from "../../Icons/icon-star.svg";
import ReviewsList from "../rewiews-list/reviews-list";
import PlacesList from "../places-list/places-list";
import withMap from "../../hocs/with-map/with-map";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Page from "../page/page";
import Map from "../map/map";
import pt from "prop-types";

const MapWrap = withMap(Map);
const PlacesListWrap = withActiveItem(PlacesList);

const Property = (props) => {
  const {offer, city, authStatus} = props;
  const nearOfferCords = offer.nearOffers ? offer.nearOffers.map((item) => item.location) : [];

  if (!offer) {
    return null;
  }

  return (
    <Page type={PageType.PROPERTY}>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((picture, i) => (
                <div key={`${picture}-${i}`} className="property__image-wrapper">
                  <img className="property__image" src={picture} alt={offer.title}></img>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
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
                  {offer.maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar"
                      src={offer.host.avatarUrl ? offer.host.avatarUrl : `img/avatar.svg`}
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
              {offer.reviews &&
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot;
                    <span className="reviews__amount">{offer.reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={offer.reviews}/>
                  {authStatus === AuthStatus.AUTH &&
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
                  }
                </section>
              }
            </div>
          </div>
          <MapWrap
            type={PageType.PROPERTY}
            offersCords={nearOfferCords}
            currentCords={offer.location}
            cityLocation={city.location}
          />
        </section>
        {offer.nearOffers &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesListWrap
                type={PlaceCardType.NEAR}
                offers={offer.nearOffers}
              />
            </section>
          </div>
        }
      </main>
    </Page>
  );
};

Property.propTypes = {
  offer: pt.shape({
    title: pt.string.isRequired,
    maxAdults: pt.number,
    description: pt.string.isRequired,
    isPremium: pt.bool,
    images: pt.arrayOf(pt.string).isRequired,
    goods: pt.arrayOf(pt.string).isRequired,
    price: pt.number.isRequired,
    rating: pt.number.isRequired,
    bedrooms: pt.number.isRequired,
    type: pt.oneOf([HouseType.APARTMENT, HouseType.ROOM, HouseType.HOUSE, HouseType.HOTEL]),
    host: pt.shape({
      avatarUrl: pt.string,
      name: pt.string.isRequired,
      isPro: pt.bool
    }).isRequired,
    location: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }).isRequired,
    reviews: pt.array,
    nearOffers: pt.array
  }),
  city: pt.shape({
    name: pt.string.isRequired,
    location: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }).isRequired
  }),
  authStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired
};

export default Property;
