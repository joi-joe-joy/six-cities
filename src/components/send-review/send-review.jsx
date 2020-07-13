import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments.js";
import pt from 'prop-types';

class SendReview extends PureComponent {
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
        ref={this.handleSetRef}
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

SendReview.propTypes = {
  onSubmit: pt.func.isRequired,
  children: pt.oneOfType([
    pt.arrayOf(pt.node),
    pt.node
  ]).isRequired,
  rating: pt.number.isRequired,
  comment: pt.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(CommentOperation.sendComment(data));
  }
});

export {SendReview};
export default connect(undefined, mapDispatchToProps)(SendReview);
