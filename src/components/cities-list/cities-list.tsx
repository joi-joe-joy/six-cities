import * as React from "react";
import * as classnames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data";
import {getCity, getCitiesList} from "../../reducer/data/selectors";
import {City} from "../../types";

interface Props {
  onLocationClick: (city: City) => void;
  citiesList: City[];
  currentCity: City;
}

const CitiesList: React.FC<Props> = (props: Props) => {
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
