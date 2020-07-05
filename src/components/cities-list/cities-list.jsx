import React from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import pt from 'prop-types';

const CitiesList = (props) => {
  const {onLocationClick, currentCity, citiesList} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((city) => (
            <li key={city} className="locations__item">
              <a className={classnames(`locations__item-link tabs__item`, {
                'tabs__item--active': currentCity === city
              })} href="#" onClick={(e) => {
                e.preventDefault();
                onLocationClick(city);
              }}>
                <span>{city}</span>
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
  citiesList: pt.arrayOf(pt.string).isRequired,
  currentCity: pt.string,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  citiesList: state.citiesList
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffersCityList(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
