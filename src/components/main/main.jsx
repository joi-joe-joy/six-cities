import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {MapType} from "../../const";
import CitiesList from "../cities-list/cities-list";
import CitiesPlaces from "../cities-places/cities-places";
import Empty from "../empty/empty";
import Map from "../map/map";
import withMap from "../../hocs/with-map/with-map";
import {getCity, getOffers} from "../../reducer/data/selectors.js";
import {getHoverCard} from "../../reducer/place/selectors.js";
import pt from "prop-types";

const MapWrap = withMap(Map);

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, hoverCard, city} = this.props;
    let offersCords = offers.map((offer) => offer.location);

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
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
                    type={MapType.MAIN}
                  />
                </div>
              </div>
            </div>
          )}
          {!offers.length && city && <Empty city={city.name}/>}
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: pt.array.isRequired,
  city: pt.shape({
    name: pt.string.isRequired,
    location: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }).isRequired
  }),
  hoverCard: pt.shape({
    location: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }).isRequired,
  })
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  hoverCard: getHoverCard(state),
  city: getCity(state)
});

export {Main};
export default connect(mapStateToProps)(Main);

