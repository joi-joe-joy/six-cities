import * as React from "react";
import * as renderer from "react-test-renderer";
import SendReview from "./send-review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {noop} from "../../utils";

const mockStore = configureStore([]);

const children = <div/>;

it(`Renderer SendReview correctly`, () => {
  const store = mockStore({
    [NameSpace.COMMENTS]: {
      comments: {},
      isLoading: false
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <SendReview
          onSubmit={noop}
          rating={5}
          comment={``}
          offerId={3}
        >
          {children}
        </SendReview>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
