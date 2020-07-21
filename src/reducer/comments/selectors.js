import {NameSpace} from "../name-space.js";

const NAME_SPACE = NameSpace.COMMENTS;

// TODO! const camelize = (str) => {
//   return str
//     .split(`_`)
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join(``);
// };

export const getComments = (state) => {
  const comments = state[NAME_SPACE].comments;
  comments.forEach((comment) => {
    if (comment.user) {
      comment.user.isPro = comment.user.is_pro;
      comment.user.avatarUrl = comment.user.avatar_url;
    }
  });
  return comments;
};
