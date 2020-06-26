import React from "react";
import PlaceCard from "../place-card/place-card";
import pt from "prop-types";

const CitiesPlaceCard = (props) => {
  const classNames = {};
  classNames.card = `cities__place-card ${props.classNames && props.classNames.card || ``}`;
  classNames.imgWrap = `cities__image-wrapper ${props.classNames && props.classNames.imgWrap || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.classNames;

  return (
    <PlaceCard
      classNames={classNames}
      {...restProps}/>
  );
};

CitiesPlaceCard.propTypes = {
  classNames: pt.shape({
    card: pt.string,
    imgWrap: pt.string
  }),
};

export default CitiesPlaceCard;
