import * as React from 'react';
import * as renderer from "react-test-renderer";
import withSort from "./with-sort";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space";
import {noop} from "../../utils";

interface Props {
  children: React.ReactNode;
}

const MockComponent: React.FC<Props> = (props: Props) => {
  const {children} = props;

  return <div>{children}</div>;
};

const mockStore = configureStore([]);
const MockComponentWrap = withSort(MockComponent);

it(`should render withSort correctly`, () => {
  const store = mockStore({
    [NameSpace.PLACE]: {
      sorting: `popular`
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MockComponentWrap
          onChangeSorting={noop}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
