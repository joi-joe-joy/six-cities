import * as React from "react";
import Review from "../review/review";
import {MAX_REVIEW_COUNT} from "../../const";
import {Comment} from "../../types";

interface Props {
  reviews: Comment[]
}

const ReviewsList: React.FC<Props> = (props: Props) => {
  const {reviews} = props;

  const _generateReviewList = (reviews) => {
    if (reviews.length) {
      return (reviews
        .sort((a, b) => +a.date - +b.date)
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
  };

  return (
    <ul className="reviews__list">
      {_generateReviewList(reviews)}
    </ul>
  );
};

export default ReviewsList;
