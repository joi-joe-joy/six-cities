import React from "react";
import {connect} from "react-redux";
import IconArrowSelect from "../../Icons/icon-arrow-select.svg";
import PlacesList from "../places-list/places-list";
import CitiesList from "../cities-list/cities-list";
import {PlaceCardType} from "../../const";
import Map from "../map/map";
import pt from "prop-types";

const Main = (props) => {
  const {offers, currentCity, onCardClick} = props;
  let offersCords = offers.map((offer) => offer.coordinations);
  // console.log(`offersCords1`, offersCords);

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
          <PlacesList
            type={PlaceCardType.CITIES}
            offers={offers}
            onCardClick={onCardClick}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offersCords={offersCords}/>
          </section>
        </div>
      </div>
    </div>
  </main>;
};

Main.propTypes = {
  offers: pt.array.isRequired,
  currentCity: pt.string.isRequired,
  onCardClick: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city
});

export {Main};
export default connect(mapStateToProps)(Main);

