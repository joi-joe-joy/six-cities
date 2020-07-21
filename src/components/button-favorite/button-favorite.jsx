import React from 'react';
import IconBookmark from "../../Icons/icon-bookmark.svg";
import classnames from "classnames";
import {PlaceCardType} from "../../const.js";
import pt from 'prop-types';

const ButtonFavorite = (props) => {
  const {isFavorite, onToggleFavorite, type} = props;
  const buttonClassName = classnames(`button`, {
    'place-card__bookmark-button': type !== PlaceCardType.PROPERTY,
    'property__bookmark-button': type === PlaceCardType.PROPERTY
  });

  return (
    <button
      onClick={onToggleFavorite}
      className={buttonClassName}
      type="button">
      <IconBookmark width="17" height="18" style={{fill: isFavorite ? `#ff9000` : `#000000`}}/>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

ButtonFavorite.propTypes = {
  isFavorite: pt.bool.isRequired,
  onToggleFavorite: pt.func.isRequired,
  type: pt.string
};

export default ButtonFavorite;
