import * as React from "react";
import renderer from "react-test-renderer";
import SendReview from "./send-review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";

const mockStore = configureStore([]);

const children = <div/>;

it(`Renderer SendReview correctly`, () => {
  const store = mockStore({
    [NameSpace.COMMENTS]: {
      comments: {}
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <SendReview
          onSubmit={()=>{}}
          rating={5}
          comment={``}
        >
          {children}
        </SendReview>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
