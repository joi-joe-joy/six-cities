import React from "react";
import PlaceCard from "../place-card/place-card";
import {PlaceCardType} from "../../const";
import withFavorite from "../../hocs/with-favorite/with-favorite.js";
import classnames from "classnames";
import pt from 'prop-types';

const PlaceCardWrap = withFavorite(PlaceCard);

const PlacesList = (props) => {
  const {offers, type, onCardHover, onCardHoverOut, activeCard} = props;
  const classNamesString = classnames(`places__list`, {
    'cities__places-list tabs__content': type === PlaceCardType.CITIES,
    'near-places__list': type === PlaceCardType.NEAR
  });

  return (
    <div className={classNamesString}>
      {offers.map((offer) => (
        <PlaceCardWrap
          currentCard={activeCard && (activeCard.id === offer.id)}
          key={offer.id}
          offer={offer}
          type={type}
          onCardHover={onCardHover}
          onCardHoverOut={onCardHoverOut}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: pt.array.isRequired,
  type: pt.string.isRequired,
  onCardHover: pt.func.isRequired,
  onCardHoverOut: pt.func.isRequired,
  activeCard: pt.shape({
    id: pt.number.isRequired
  })
};

export default PlacesList;
