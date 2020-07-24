import * as React from "react";
import {connect} from 'react-redux';
import {Comment, AuthStatus} from "../../types";
import {Operation as CommentOperation} from "../../reducer/comments/comments";
import withCommentForm from "../../hocs/with-comment-form/with-comment-form";
import SendReview from "../send-review/send-review";
import {getComments} from "../../reducer/comments/selectors";
import {getAuthStatus} from "../../reducer/user/selectors";
import ReviewsList from "../rewiews-list/reviews-list";

const SendReviewWrap = withCommentForm(SendReview);

interface Props {
  comments: Comment[];
  loadComments: (id: number) => void;
  offerId: number;
  authStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
}

const ReviewBox: React.FC<Props> = (props: Props) => {
  const {offerId, comments, loadComments, authStatus} = props;

  React.useEffect(() => {
    if (offerId) {
      loadComments(offerId);
    }
  }, [offerId, loadComments]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{comments && comments.length || `0`}</span>
      </h2>
      {comments &&
        <ReviewsList reviews={comments}/>
      }
      {authStatus === AuthStatus.AUTH &&
        <SendReviewWrap
          offerId={offerId}
        />
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  authStatus: getAuthStatus(state),
});

const {loadComments} = CommentOperation;
const mapDispatchToProps = {
  loadComments
};

export {ReviewBox};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewBox);
