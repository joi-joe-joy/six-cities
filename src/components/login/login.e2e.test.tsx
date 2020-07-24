import * as React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import {Login} from "./login";
import {NameSpace} from "../../reducer/name-space";
import {noop} from "../../utils";

const mockStore = configureStore([]);
const mockEvent = {
  preventDefault: noop
};

it(`The Form should send`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      errorText: ``
    }
  });
  const onSubmit = jest.fn();
  const loginData = {
    email: ``,
    password: ``
  };

  const loginScreen = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login
            errorText={`errorText`}
            onSubmit={onSubmit}
          />
        </BrowserRouter>
      </Provider>
  );

  const form = loginScreen.find(`form.login__form.form`);

  form.simulate(`submit`, mockEvent);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit.mock.calls[0][0]).toMatchObject(loginData);
});
