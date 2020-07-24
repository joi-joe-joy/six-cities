import * as React from 'react';
import {connect} from "react-redux";
import IconStar from "../../Icons/icon-star.svg";
import StarActive from "../../Icons/star-active.svg";
import {MAX_COMMENT_LENGTH} from "../../const";
import {getErrorText} from "../../reducer/comments/selectors";
import {Operation as CommentOperation} from "../../reducer/comments/comments";

interface State {
  rating: number;
  comment: string;
}

interface Props {
  onSubmit: ({comment, rating}: {comment: string; rating: number}, offerId: number) => void;
  offerId: number;
  errorText: string;
}

const withCommentForm = (Component) => {
  class WithCommentForm extends React.PureComponent<Props, State> {
    private radioArray: number[] = [5, 4, 3, 2, 1];

    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleClickRadio = this.handleClickRadio.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClickRadio(event) {
      this.setState({
        rating: +event.target.value
      });
    }

    handleChange(event) {
      this.setState({
        comment: event.target.value
      });
    }

    handleSubmit() {
      const {onSubmit, offerId} = this.props;
      const {rating, comment} = this.state;

      onSubmit({comment, rating}, offerId);

      this.setState({
        rating: 0,
        comment: ``
      });
    }

    render() {
      const {errorText} = this.props;

      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          comment={this.state.comment}
          onSubmit={this.handleSubmit}
        >
          <div className="reviews__rating-form form__rating">
            {this.radioArray.map((value) => (
              <React.Fragment key={`radio-${value}`}>
                <input className="form__rating-input visually-hidden"
                  name="rating" value={value}
                  onClick={this.handleClickRadio}
                  id={`${value}-stars`} type="radio"/>
                <label htmlFor={`${value}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title="perfect">
                  {(value <= this.state.rating) ?
                    <StarActive width="37" height="33"/> :
                    <IconStar width="37" height="33"/>}
                </label>
              </React.Fragment>
            ))}
          </div>
          <textarea
            value={this.state.comment}
            maxLength={MAX_COMMENT_LENGTH}
            onChange={this.handleChange}
            className="reviews__textarea form__textarea" id="review" name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
          {errorText &&
            <span style={{color: `red`, fontSize: `13px`}}>{errorText}</span>
          }
        </Component>
      );
    }
  }

  const mapStateToProps = (state) => ({
    errorText: getErrorText(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(data, offerId) {
      dispatch(CommentOperation.sendComment(data, offerId));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithCommentForm);
};

export default withCommentForm;
