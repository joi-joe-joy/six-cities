import React from 'react';
import renderer from "react-test-renderer";
import withSort from "./with-sort";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../reducer/name-space.js";
import pt from "prop-types";

const MockComponent = (props) => {
  const {children} = props;

  return <div>{children}</div>;
};

MockComponent.propTypes = {
  children: pt.oneOfType([
    pt.arrayOf(pt.node),
    pt.node
  ]).isRequired
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
          changeSorting={()=>{}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
