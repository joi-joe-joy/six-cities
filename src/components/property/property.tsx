import * as React from "react";
import {connect} from 'react-redux';
import {HouseTypeTemplate} from "../../const";
import {HouseType, PageType, PlaceCardType, AuthStatus, Offer, City, Location, Comment} from "../../types";
import withMap from "../../hocs/with-map/with-map";
import withCommentForm from "../../hocs/with-comment-form/with-comment-form";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withFavorite from "../../hocs/with-favorite/with-favorite";
import {getCity, getNearbyOffers, getOfferByRouteId, getNearbyLocations} from "../../reducer/data/selectors";
import {getAuthStatus} from "../../reducer/user/selectors";
import {getComments} from "../../reducer/comments/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as CommentOperation} from "../../reducer/comments/comments";
import ReviewsList from "../rewiews-list/reviews-list";
import PlacesList from "../places-list/places-list";
import SendReview from "../send-review/send-review";
import ButtonFavorite from "../button-favorite/button-favorite";
import Page from "../page/page";
import Map from "../map/map";

interface Props {
  offer: Offer,
  city: City,
  authStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH,
  match: {
    params: {
      id: string
    }
  },
  nearbyOffers: Offer[],
  loadNearOffers: (id: number) => void,
  loadComments: (id: number) => void,
  nearLocations: Location[],
  comments: Comment[]
}

const MapWrap = withMap(Map);
const PlacesListWrap = withActiveItem(PlacesList);
const SendReviewWrap = withCommentForm(SendReview);
const ButtonFavoriteWrap = withFavorite(ButtonFavorite);

const Property: React.FC<Props> = (props: Props) => {
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

  React.useEffect(() => {
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
                  {offer.bedrooms} Bedrooms
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
