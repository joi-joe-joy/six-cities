import * as React from "react";
import * as classnames from "classnames";
import {PlaceCardType, Offer} from "../../types";
import PlaceCard from "../place-card/place-card";

interface Props {
  offers: Offer[];
  type: PlaceCardType.CITIES | PlaceCardType.FAVORITES | PlaceCardType.NEAR | PlaceCardType.PROPERTY;
  onCardHover?: (offer: Offer) => void;
  onCardHoverOut?: () => void;
}

const PlacesList: React.FC<Props> = (props: Props) => {
  const {offers, type, onCardHover, onCardHoverOut} = props;
  const classNamesString = classnames(`places__list`, {
    'cities__places-list tabs__content': type === PlaceCardType.CITIES,
    'near-places__list': type === PlaceCardType.NEAR
  });

  return (
    <div className={classNamesString}>
      {offers.map((offer) => (
        <PlaceCard
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

export default PlacesList;
