import React from 'react';
import {connect} from 'react-redux';
import {PageType} from "../../const.js";
import {getSortedFavorites} from "../../reducer/favorite/selectors.js";
import Page from "../page/page";
import PlaceCard from "../place-card/place-card";
import {PlaceCardType} from "../../const.js";
import withFavorite from "../../hocs/with-favorite/with-favorite.js";
import pt from 'prop-types';

const PlaceCardWrap = withFavorite(PlaceCard);

const Favorites = (props) => {
  const {favorites} = props;

  if (!favorites) {
    return null;
  }

  return (
    <Page type={PageType.FAVORITES}>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favorites.map((offer) => (
                <li key={offer.id} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{offer.city.name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <PlaceCardWrap
                      offer={offer}
                      type={PlaceCardType.FAVORITES}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Page>
  );
};

Favorites.propTypes = {
  favorites: pt.arrayOf(
      pt.shape({
        id: pt.number.isRequired
      })
  )
};

const mapStateToProps = (state) => ({
  favorites: getSortedFavorites(state)
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
