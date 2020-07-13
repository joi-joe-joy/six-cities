import React, {PureComponent, Fragment} from 'react';
import IconStar from "../../Icons/icon-star.svg";
import StarActive from "../../Icons/star-active.svg";
import {MAX_COMMENT_LENGTH} from "../../const.js";

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleClickRadio = this.handleClickRadio.bind(this);
    }

    _createArray() {
      this.radioArray = [];
      for (let i = 5; i > 0; i--) {
        this.radioArray.push(i);
      }
      return this.radioArray;
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

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          comment={this.state.comment}
        >
          <div className="reviews__rating-form form__rating">
            {this._createArray().map((value) => (
              <Fragment key={`radio-${value}`}>
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
              </Fragment>
            ))}
          </div>
          <textarea
            maxLength={MAX_COMMENT_LENGTH}
            onChange={this.handleChange}
            className="reviews__textarea form__textarea" id="review" name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        </Component>
      );
    }
  }

  return WithCommentForm;
};

export default withCommentForm;
