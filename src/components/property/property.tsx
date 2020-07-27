import * as React from "react";
import {connect} from 'react-redux';
import {HouseTypeTemplate, MAX_PREVIEW_IMAGE_COUNT, KEY_LENGTH} from "../../const";
import {PageType, PlaceCardType, Offer, City, Location} from "../../types";
import withMap from "../../hocs/with-map/with-map";
import withFavorite from "../../hocs/with-favorite/with-favorite";
import {getCity, getOfferByRouteId, getNearbyLocations} from "../../reducer/data/selectors";
import ReviewBox from "../reviews-box/review-box";
import NearPlaces from "../near-places/near-places";
import ButtonFavorite from "../button-favorite/button-favorite";
import Page from "../page/page";
import Map from "../map/map";

interface Props {
  offer: Offer;
  city: City;
  match: {
    params: {
      id: string;
    };
  };
  nearLocations: Location[];
}

const MapWrap = withMap(Map);
const ButtonFavoriteWrap = withFavorite(ButtonFavorite);

const Property: React.FC<Props> = (props: Props) => {
  const {
    city,
    offer,
    nearLocations,
  } = props;

  if (!offer) {
    return null;
  }

  return (
    <Page type={PageType.PROPERTY}>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, MAX_PREVIEW_IMAGE_COUNT).map((picture, i) => (
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
                    <p key={`${paragraph.slice(0, KEY_LENGTH)}-${i}`} className="property__text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <ReviewBox offerId={offer.id}/>
            </div>
          </div>
          {nearLocations && nearLocations.length &&
            <MapWrap
              offersCords={nearLocations}
              currentCords={offer.location}
              cityLocation={city.location}
              type={PageType.PROPERTY}
            />
          }
        </section>
        <NearPlaces offerId={offer.id}/>
      </main>
    </Page>
  );
};

const mapStateToProps = (state, props) => ({
  offer: getOfferByRouteId(state, props),
  city: getCity(state),
  nearLocations: getNearbyLocations(state),
});

export {Property};
export default connect(mapStateToProps)(Property);
