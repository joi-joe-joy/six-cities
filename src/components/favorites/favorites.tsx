import * as React from 'react';
import {connect} from 'react-redux';
import {PageType, PlaceCardType, Offer} from "../../types";
import {getSortedFavorites} from "../../reducer/favorite/selectors";
import Page from "../page/page";
import PlaceCard from "../place-card/place-card";
import withFavorite from "../../hocs/with-favorite/with-favorite";

interface Props {
  favorites: Offer[]
};

const PlaceCardWrap = withFavorite(PlaceCard);

const Favorites: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  favorites: getSortedFavorites(state)
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
