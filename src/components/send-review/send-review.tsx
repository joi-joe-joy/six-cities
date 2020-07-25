import * as React from 'react';
import {connect} from "react-redux";
import {getIsLoading} from "../../reducer/comments/selectors";

interface Props {
  children: React.ReactNode;
  rating: number;
  comment: string;
  offerId: number;
  isLoading: boolean;
  onSubmit: () => void;
}

const SendReview: React.FC<Props> = (props: Props) => {
  const {children, rating, comment, isLoading, onSubmit} = props;
  const disabled = !rating || comment.length < 50 || comment.length > 300 || isLoading;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {children}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state)
});

export {SendReview};
export default connect(mapStateToProps)(SendReview);
