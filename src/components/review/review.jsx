import React, {PureComponent, Fragment} from "react";
import moment from "moment";
import pt from "prop-types";

class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;

    return (
      <Fragment>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar"
              src={review.author.photo ? review.author.photo : `img/avatar-max.jpg`}
              width="54" height="54" alt={review.author.name}></img>
          </div>
          <span className="reviews__user-name">
            {review.author.name}
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
            {review.description}
          </p>
          <time className="reviews__time"
            dateTime={moment(review.date).format(`YYYY-MM-DD`)}>
            {moment(review.date).format(`MMMM YYYY`)}
          </time>
        </div>
      </Fragment>
    );
  }
}

Review.propTypes = {
  review: pt.shape({
    author: pt.shape({
      photo: pt.string,
      name: pt.string.isRequired
    }).isRequired,
    rating: pt.number.isRequired,
    description: pt.string.isRequired,
    date: pt.date
  }).isRequired
};

export default Review;
