import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {HouseType, HouseTypeTemplate, PageType, PlaceCardType, AuthStatus} from "../../const.js";
import withMap from "../../hocs/with-map/with-map";
import withCommentForm from "../../hocs/with-comment-form/with-comment-form.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withFavorite from "../../hocs/with-favorite/with-favorite.js";
import {getCity, getNearbyOffers, getOfferByRouteId, getNearbyLocations} from "../../reducer/data/selectors.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {getComments} from "../../reducer/comments/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {Operation as CommentOperation} from "../../reducer/comments/comments.js";
import ReviewsList from "../rewiews-list/reviews-list";
import PlacesList from "../places-list/places-list";
import SendReview from "../send-review/send-review";
import ButtonFavorite from "../button-favorite/button-favorite";
import Page from "../page/page";
import Map from "../map/map";
import pt from "prop-types";

const MapWrap = withMap(Map);
const PlacesListWrap = withActiveItem(PlacesList);
const SendReviewWrap = withCommentForm(SendReview);
const ButtonFavoriteWrap = withFavorite(ButtonFavorite);

const Property = (props) => {
  const {
    city,
    authStatus,
    nearbyOffers,
    offer,
    loadNearOffers,
    nearLocations,
    comments,
    loadComments
  } = props;

  useEffect(() => {
    if (offer && offer.id) {
      loadNearOffers(offer.id);
      loadComments(offer.id);
    }
  }, [offer, loadNearOffers, loadComments]);

  if (!offer) {
    return null;
  }

  return (
    <Page type={PageType.PROPERTY}>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, 6).map((picture, i) => (
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
                <ButtonFavoriteWrap
                  offer={offer}
                  type={PlaceCardType.PROPERTY}
                />
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
                      src={`/` + (offer.host.avatarUrl ? offer.host.avatarUrl : `img/avatar.svg`)}
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
                  <span className="reviews__amount">{comments && comments.length || `0`}</span>
                </h2>
                {comments &&
                  <ReviewsList reviews={comments}/>
                }
                {authStatus === AuthStatus.AUTH && <SendReviewWrap/>}
              </section>
            </div>
          </div>
          {nearLocations && nearLocations.length &&
            <MapWrap
              type={PageType.PROPERTY}
              offersCords={nearLocations}
              currentCords={offer.location}
              cityLocation={city.location}
            />
          }
        </section>
        {nearbyOffers &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesListWrap
                type={PlaceCardType.NEAR}
                offers={nearbyOffers}
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
    id: pt.number.isRequired,
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
  authStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired,
  match: pt.shape({
    params: pt.shape({
      id: pt.string.isRequired
    })
  }),
  nearbyOffers: pt.arrayOf(
      pt.shape({
        id: pt.number.isRequired,
        title: pt.string.isRequired,
        isPremium: pt.bool,
        previewImage: pt.string,
        price: pt.number.isRequired,
        rating: pt.number.isRequired,
        type: pt.oneOf([HouseType.APARTMENT, HouseType.ROOM, HouseType.HOUSE, HouseType.HOTEL]),
        location: pt.shape({
          latitude: pt.number.isRequired,
          longitude: pt.number.isRequired,
          zoom: pt.number.isRequired
        }).isRequired
      })
  ),
  loadNearOffers: pt.func.isRequired,
  loadComments: pt.func.isRequired,
  nearLocations: pt.arrayOf(
      pt.shape({
        latitude: pt.number.isRequired,
        longitude: pt.number.isRequired,
        zoom: pt.number.isRequired
      })
  ),
  comments: pt.arrayOf(
      pt.shape({
        comment: pt.string.isRequired,
        date: pt.string.isRequired,
        id: pt.number.isRequired,
        rating: pt.number.isRequired,
        user: pt.shape({
          avatarUrl: pt.string,
          id: pt.number.isRequired,
          isPro: pt.bool,
          name: pt.string.isRequired
        })
      })
  )
};

const mapStateToProps = (state, props) => ({
  offer: getOfferByRouteId(state, props),
  nearbyOffers: getNearbyOffers(state),
  city: getCity(state),
  authStatus: getAuthStatus(state),
  nearLocations: getNearbyLocations(state),
  comments: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadNearOffers(offerId) {
    dispatch(DataOperation.loadNearbyOffers(offerId));
  },
  loadComments(offerId) {
    dispatch(CommentOperation.loadComments(offerId));
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
