import * as React from "react";
import moment from "moment";
import {Comment} from "../../types";

interface Props {
  review: Comment;
}

const Review: React.FC<Props> = (props: Props) => {
  const {review} = props;

  return (
    <React.Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar"
            src={review.user.avatarUrl ? review.user.avatarUrl : `img/avatar-max.jpg`}
            width="54" height="54" alt={review.user.name}></img>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time"
          dateTime={moment(review.date).format(`YYYY-MM-DD`)}>
          {moment(review.date).format(`MMMM YYYY`)}
        </time>
      </div>
    </React.Fragment>
  );
};

export default Review;
