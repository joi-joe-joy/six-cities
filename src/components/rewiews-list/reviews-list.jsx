import React, {PureComponent} from "react";
import Review from "../review/review";
import {MAX_REVIEW_COUNT} from "../../const";
import pt from "prop-types";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  _generateReviewList(reviews) {
    if (reviews.length) {
      return (reviews
        .sort((a, b) => a.date - b.date)
        .reverse()
        .slice(0, MAX_REVIEW_COUNT)
        .map((review) => (
          <li key={review.id} className="reviews__item">
            <Review review={review}/>
          </li>
        ))
      );
    } else {
      return null;
    }
  }

  render() {
    const {reviews} = this.props;

    return (
      <ul className="reviews__list">
        {this._generateReviewList(reviews)}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: pt.array.isRequired
};

export default ReviewsList;
