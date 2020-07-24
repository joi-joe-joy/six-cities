import * as React from "react";
import {connect} from "react-redux";
import {PageType, Offer, City} from "../../types";
import CitiesList from "../cities-list/cities-list";
import CitiesPlaces from "../cities-places/cities-places";
import Empty from "../empty/empty";
import Page from "../page/page";
import Map from "../map/map";
import withMap from "../../hocs/with-map/with-map";
import {getCity, getOffers} from "../../reducer/data/selectors";
import {getHoverCard} from "../../reducer/place/selectors";

interface Props {
  offers: Offer[];
  city: City;
  hoverCard: Offer;
}

const MapWrap = withMap(Map);

class Main extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, hoverCard, city} = this.props;
    let offersCords = [];
    if (offers) {
      offersCords = offers.map((offer) => offer.location);
    }

    return (
      <Page type={PageType.MAIN}>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList/>
          {!!offers.length && (
            <div className="cities">
              <div className="cities__places-container container">
                <CitiesPlaces/>
                <div className="cities__right-section">
                  <MapWrap
                    cityLocation={city.location}
                    currentCords={hoverCard && hoverCard.location}
                    offersCords={offersCords}
                  />
                </div>
              </div>
            </div>
          )}
          {!offers.length && <Empty/>}
        </main>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  hoverCard: getHoverCard(state),
  city: getCity(state)
});

export {Main};
export default connect(mapStateToProps)(Main);

