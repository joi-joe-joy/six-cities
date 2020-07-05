import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {MapType} from "../../const";
import CitiesList from "../cities-list/cities-list";
import CitiesPlaces from "../cities-places/cities-places";
import Map from "../map/map";
import withMap from "../../hocs/with-map/with-map";
import pt from "prop-types";

const MapWrap = withMap(Map);

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, hoverCard} = this.props;
    let offersCords = offers.map((offer) => offer.coordinations);

    return <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CitiesPlaces/>
          <div className="cities__right-section">
            <MapWrap
              currentCords={hoverCard && hoverCard.coordinations}
              offersCords={offersCords}
              type={MapType.MAIN}
            />
          </div>
        </div>
      </div>
    </main>;
  }
}

Main.propTypes = {
  offers: pt.array.isRequired,
  hoverCard: pt.shape({
    coordinations: pt.arrayOf(pt.number).isRequired,
  })
};

const mapStateToProps = (state) => ({
  offers: state.offersCityList,
  hoverCard: state.hoverCard
});

export {Main};
export default connect(mapStateToProps)(Main);

