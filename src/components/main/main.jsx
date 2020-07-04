import React from "react";
import {connect} from "react-redux";
import IconArrowSelect from "../../Icons/icon-arrow-select.svg";
import PlacesList from "../places-list/places-list";
import CitiesList from "../cities-list/cities-list";
import {PlaceCardType} from "../../const";
import {MapType} from "../../const";
import Map from "../map/map";
import withMap from "../../hocs/with-map/with-map";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import pt from "prop-types";

const MapWrap = withMap(Map);
const PlacesListWrap = withActiveItem(PlacesList);

const Main = (props) => {
  const {offers, currentCity} = props;
  let offersCords = offers.map((offer) => offer.coordinations);

  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <CitiesList/>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <IconArrowSelect width="7" height="4"/>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
            <select className="places__sorting-type" id="places-sorting" defaultValue="popular">
              <option className="places__option" value="popular">Popular</option>
              <option className="places__option" value="to-high">Price: low to high</option>
              <option className="places__option" value="to-low">Price: high to low</option>
              <option className="places__option" value="top-rated">Top rated first</option>
            </select>
          </form>
          <PlacesListWrap
            type={PlaceCardType.CITIES}
            offers={offers}
          />
        </section>
        <div className="cities__right-section">
          <MapWrap
            offersCords={offersCords}
            type={MapType.MAIN}
          />
        </div>
      </div>
    </div>
  </main>;
};

Main.propTypes = {
  offers: pt.array.isRequired,
  currentCity: pt.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city
});

export {Main};
export default connect(mapStateToProps)(Main);

