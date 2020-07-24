import * as React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {SendReview} from "./send-review";
import {NameSpace} from "../../reducer/name-space";
import {noop} from "../../utils";

const mockStore = configureStore([]);
const mockEvent = {
  preventDefault: noop
};

it(`The Form should send`, () => {
  const store = mockStore({
    [NameSpace.COMMENTS]: {
      isLoading: false
    }
  });
  const onSubmit = jest.fn();

  const sendReviewScreen = mount(
      <Provider store={store}>
        <SendReview
          isLoading={false}
          offerId={1}
          rating={3}
          comment={`test`}
          onSubmit={onSubmit}
        >
          <div/>
        </SendReview>
      </Provider>
  );

  const form = sendReviewScreen.find(`form.reviews__form.form`);

  form.simulate(`submit`, mockEvent);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
