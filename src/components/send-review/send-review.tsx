import * as React from 'react';
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments";

interface Props {
  onSubmit: ({comment, rating}: {comment: string, rating: number}) => void,
  children: React.ReactNode,
  rating: number,
  comment: string
}

class SendReview extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {onSubmit, rating, comment} = this.props;
    e.preventDefault();

    onSubmit({
      comment,
      rating
    });
  }

  render() {
    const {children, rating, comment} = this.props;
    const disabled = !rating || comment.length < 50 || comment.length > 300;

    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this.handleSubmit}>
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(CommentOperation.sendComment(data));
  }
});

export {SendReview};
export default connect(undefined, mapDispatchToProps)(SendReview);
