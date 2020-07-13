import React, {Fragment} from "react";
import moment from "moment";
import pt from "prop-types";

const Review = (props) => {
  const {review} = props;

  return (
    <Fragment>
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
    </Fragment>
  );
};

Review.propTypes = {
  review: pt.shape({
    user: pt.shape({
      avatarUrl: pt.string.isRequired,
      name: pt.string.isRequired
    }).isRequired,
    rating: pt.number.isRequired,
    comment: pt.string.isRequired,
    date: pt.date
  }).isRequired
};

export default Review;
