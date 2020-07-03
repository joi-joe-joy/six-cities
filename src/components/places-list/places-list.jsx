import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card";
import {PlaceCardType} from "../../const";
import classnames from "classnames";
import pt from 'prop-types';


class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.onBookmarkClick = this.onBookmarkClick.bind(this);
  }

  onBookmarkClick() {}

  render() {
    const {offers, type, onCardHover, activeItemId} = this.props;
    const classNamesString = classnames(`places__list`, {
      'cities__places-list tabs__content': type === PlaceCardType.CITIES,
      'near-places__list': type === PlaceCardType.NEAR
    });

    return (
      <div className={classNamesString}>
        {offers.map((offer) => (
          <PlaceCard
            currentCard={activeItemId === offer.id}
            key={offer.id}
            offer={offer}
            type={type}
            onCardHover={onCardHover}
            onBookmarkClick={this.onBookmarkClick}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: pt.array.isRequired,
  type: pt.string.isRequired,
  onCardHover: pt.func.isRequired,
  activeItemId: pt.number
};

export default PlacesList;
