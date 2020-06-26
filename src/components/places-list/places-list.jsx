import React, {PureComponent} from "react";
import NearPlaceCard from "../near-place-card/near-place-card";
import CitiesPlaceCard from "../cities-place-card/cities-place-card";
import PlaceCard from "../place-card/place-card";
import {PlaceCardType} from "../../const";
import pt from 'prop-types';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };
    this.onBookmarkClick = this.onBookmarkClick.bind(this);
    this.onCardHover = this.onCardHover.bind(this);
  }

  onBookmarkClick() {}

  onCardHover(card) {
    if (this.state.activeCard !== card) {
      this.setState({
        activeCard: card
      });
    }
  }

  _getComponentByType(type, offer) {
    const {onCardClick} = this.props;

    switch (type) {
      case PlaceCardType.CITIES:
        return <NearPlaceCard
          key={offer.id}
          offer={offer}
          onCardHover={this.onCardHover}
          onBookmarkClick={this.onBookmarkClick}
          onCardClick={onCardClick}
        />;
      case PlaceCardType.NEAR:
        return <CitiesPlaceCard
          key={offer.id}
          offer={offer}
          onCardHover={this.onCardHover}
          onBookmarkClick={this.onBookmarkClick}
          onCardClick={onCardClick}
        />;
      default:
        return <PlaceCard
          key={offer.id}
          offer={offer}
          onCardHover={this.onCardHover}
          onBookmarkClick={this.onBookmarkClick}
          onCardClick={onCardClick}
        />;
    }
  }

  render() {
    const {offers, type} = this.props;

    return (
      <div className={`
          ${type === PlaceCardType.CITIES ? `cities__places-list tabs__content` : ``}
          ${type === PlaceCardType.NEAR ? `near-places__list` : ``} places__list`}>
        {offers.map((offer) => (
          this._getComponentByType(type, offer)
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: pt.array.isRequired,
  onCardClick: pt.func.isRequired,
  type: pt.string
};

export default PlacesList;
