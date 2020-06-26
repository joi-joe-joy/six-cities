import React, {PureComponent} from "react";
import IconArrowSelect from "../../Icons/icon-arrow-select.svg";
import PlacesList from "../places-list/places-list";
import {PlaceCardType} from "../../const";
import Map from "../map/map";
import pt from "prop-types";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {rentCount, offers, onLocationClick, onCardClick} = this.props;
    const offersCords = offers.map((offer) => offer.coordinations);

    return <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href="#" onClick={onLocationClick}>
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{rentCount} places to stay in Amsterdam</b>
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
  }
}

Main.propTypes = {
  rentCount: pt.number.isRequired,
  offers: pt.array.isRequired,
  onLocationClick: pt.func.isRequired,
  onCardClick: pt.func.isRequired
};

export default Main;

