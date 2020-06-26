import React from "react";
import PlaceCard from "../place-card/place-card";
import pt from "prop-types";

const NearPlaceCard = (props) => {
  const classNames = {};
  classNames.card = `near-places__card ${props.classNames && props.classNames.card || ``}`;
  classNames.imgWrap = `near-places__image-wrapper ${props.classNames && props.classNames.imgWrap || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.classNames;

  return (
    <PlaceCard
      classNames={classNames}
      {...restProps}
    />
  );
};

NearPlaceCard.propTypes = {
  classNames: pt.shape({
    card: pt.string,
    imgWrap: pt.string
  }),
};

export default NearPlaceCard;


