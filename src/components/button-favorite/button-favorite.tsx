import * as React from 'react';
import IconBookmark from "../../Icons/icon-bookmark.svg";
import * as classnames from "classnames";
import {PlaceCardType} from "../../types";

interface Props {
  isFavorite: boolean;
  onToggleFavorite: () => void;
  type: PlaceCardType.CITIES | PlaceCardType.NEAR | PlaceCardType.FAVORITES | PlaceCardType.PROPERTY;
}

const ButtonFavorite: React.FC<Props> = (props: Props) => {

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

export default ButtonFavorite;
