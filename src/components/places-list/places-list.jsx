import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card";
import {PlaceCardType} from "../../const";
import classnames from "classnames";
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

  render() {
    const {offers, type, onCardClick} = this.props;
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
            onCardHover={this.onCardHover}
            onBookmarkClick={this.onBookmarkClick}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: pt.array.isRequired,
  onCardClick: pt.func.isRequired,
  type: pt.string.isRequired
};

export default PlacesList;
