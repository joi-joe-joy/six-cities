import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Operation as FavoriteOperation} from "../../reducer/favorite/favorite.js";
import pt from 'prop-types';

const withFavorite = (Component) => {
  class WithFavorite extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isFavorite: props.offer.isFavorite
      };
      this.handleButtonBookClick = this.handleButtonBookClick.bind(this);
    }

    handleButtonBookClick() {
      const {toggleFavorite, offer} = this.props;
      toggleFavorite({
        hotelId: offer.id,
        status: !offer.isFavorite
      });
      this.setState((state) => ({
        isFavorite: !state.isFavorite
      }));
    }

    render() {
      const {isFavorite} = this.state;
      return (
        <Component
          {...this.props}
          isFavorite={isFavorite}
          onToggleFavorite={this.handleButtonBookClick}
        />
      );
    }
  }

  WithFavorite.propTypes = {
    toggleFavorite: pt.func.isRequired,
    offer: pt.shape({
      id: pt.number.isRequired,
      isFavorite: pt.bool,
    }).isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    toggleFavorite(data) {
      dispatch(FavoriteOperation.toggleFavorite(data));
    }
  });

  return connect(undefined, mapDispatchToProps)(WithFavorite);
};

export default withFavorite;
