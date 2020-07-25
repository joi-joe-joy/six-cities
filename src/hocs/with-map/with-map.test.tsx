import * as React from "react";
import * as renderer from "react-test-renderer";
import withMap from "./with-map";
import {Location, PageType} from "../../types";

const MockComponent = () => {
  return <div/>;
};

const MockComponentWrap = withMap(MockComponent);

const location: Location = {
  latitude: 45,
  longitude: 54,
  zoom: 12
};

it(`should render withMap correctly`, () => {

  const tree = renderer.create(
      <MockComponentWrap
        type={PageType.MAIN}
        offersCords={[location]}
        currentCords={location}
        cityLocation={location}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
