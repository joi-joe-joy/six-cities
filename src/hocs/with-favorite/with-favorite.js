import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import history from "../../history.js";
import {AuthStatus, AppRoute} from "../../const.js";
import {Operation as FavoriteOperation} from "../../reducer/favorite/favorite.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
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
      const {toggleFavorite, offer, authStatus} = this.props;

      if (authStatus === AuthStatus.AUTH) {
        toggleFavorite({
          hotelId: offer.id,
          status: !this.state.isFavorite
        });
        this.setState((state) => {
          return {
            isFavorite: !state.isFavorite
          };
        });
      } else {
        history.push(AppRoute.LOGIN);
      }
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
    authStatus: pt.string.isRequired
  };

  const mapStateToProps = (state) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleFavorite(data) {
      dispatch(FavoriteOperation.toggleFavorite(data));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFavorite);
};

export default withFavorite;
