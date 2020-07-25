import * as React from "react";
import {connect} from 'react-redux';
import {Offer, PlaceCardType} from "../../types";
import {getNearbyOffers} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import PlacesList from "../places-list/places-list";

interface Props {
  nearbyOffers: Offer[];
  onLoadNearOffers: (id: number) => void;
  offerId: number;
}

const NearPlaces: React.FC<Props> = (props: Props) => {
  const {nearbyOffers, offerId, onLoadNearOffers} = props;

  React.useEffect(() => {
    if (offerId) {
      onLoadNearOffers(offerId);
    }
  }, [offerId, onLoadNearOffers]);

  if (!nearbyOffers) {
    return null;
  } else {
    return (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            type={PlaceCardType.NEAR}
            offers={nearbyOffers}
          />
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  nearbyOffers: getNearbyOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadNearOffers(offerId) {
    dispatch(DataOperation.loadNearbyOffers(offerId));
  }
});

export {NearPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(NearPlaces);
