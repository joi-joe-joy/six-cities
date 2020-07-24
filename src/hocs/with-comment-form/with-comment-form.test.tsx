import * as React from 'react';
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import withCommentForm from "./with-comment-form";
import {NameSpace} from "../../reducer/name-space";

const mockStore = configureStore([]);
const MockComponent = () => <div/>;

const MockComponentWrap = withCommentForm(MockComponent);

it(`should render withActiveItem correctly`, () => {
  const store = mockStore({
    [NameSpace.COMMENTS]: {
      error: ``
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <MockComponentWrap
          offerId={1}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
