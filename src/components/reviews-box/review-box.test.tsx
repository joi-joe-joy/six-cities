import * as React from "react";
import * as renderer from "react-test-renderer";
import {ReviewBox} from "./review-box";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {Comment, AuthStatus} from "../../types";
import {noop} from '../../utils';

const mockStore = configureStore([]);

const comments: Comment[] = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
}];

it(`Render ReviewBox correctly with Comments and comment form`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    },
    [NameSpace.COMMENTS]: {
      comments
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewBox
          comments={comments}
          loadComments={noop}
          offerId={1}
          authStatus={AuthStatus.AUTH}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render ReviewBox correctly without Comments and comment form`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    },
    [NameSpace.COMMENTS]: {
      comments: []
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <ReviewBox
          comments={[]}
          loadComments={noop}
          offerId={1}
          authStatus={AuthStatus.AUTH}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
