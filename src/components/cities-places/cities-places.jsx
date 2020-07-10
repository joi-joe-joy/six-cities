import React from 'react';
import {connect} from "react-redux";
import {PlaceCardType} from "../../const";
import SortVariants from "../sort-variants/sort-variants";
import PlacesList from "../places-list/places-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withSort from "../../hocs/with-sort/with-sort";
import {getCity} from "../../reducer/data/selectors.js";
import {getSortedOffers} from "../../reducer/data/selectors.js";
import pt from "prop-types";

const SortVariantsWrap = withSort(SortVariants);
const PlacesListWrap = withActiveItem(PlacesList);

const CitiesPlaces = (props) => {
  const {offers, currentCity} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
      <SortVariantsWrap/>
      <PlacesListWrap
        type={PlaceCardType.CITIES}
        offers={offers}
      />
    </section>
  );
};

CitiesPlaces.propTypes = {
  offers: pt.array.isRequired,
  currentCity: pt.shape({
    name: pt.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state),
  offers: getSortedOffers(state)
});

export {CitiesPlaces};
export default connect(mapStateToProps)(CitiesPlaces);
