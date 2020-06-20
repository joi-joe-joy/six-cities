import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card";
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
    const {offers, onCardClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => {
          return <PlaceCard
            key={offer + i}
            offer={offer}
            onCardHover={this.onCardHover}
            onBookmarkClick={this.onBookmarkClick}
            onCardClick={onCardClick}
          />;
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: pt.array.isRequired,
  onCardClick: pt.func.isRequired
};

export default PlacesList;
