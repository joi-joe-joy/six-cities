import React from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import {getCity, getCitiesList} from "../../reducer/data/selectors.js";
import pt from 'prop-types';

const CitiesList = (props) => {
  const {onLocationClick, currentCity, citiesList} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((city) => (
            <li key={city.name} className="locations__item">
              <a className={classnames(`locations__item-link tabs__item`, {
                'tabs__item--active': currentCity.name === city.name
              })} href="#" onClick={(e) => {
                e.preventDefault();
                onLocationClick(city);
              }}>
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  onLocationClick: pt.func.isRequired,
  citiesList: pt.arrayOf(
      pt.shape({
        name: pt.string.isRequired,
        location: pt.shape({
          latitude: pt.number.isRequired,
          longitude: pt.number.isRequired,
          zoom: pt.number.isRequired
        }).isRequired
      })
  ).isRequired,
  currentCity: pt.shape({
    name: pt.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state),
  citiesList: getCitiesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
