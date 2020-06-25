import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

jest.mock(`leaflet`);

const coordinations = [
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

it(`Renderer Map correctly`, () => {
  const tree = renderer.create(
      <Map
        offerCords={coordinations}
      />, {
        createNodeMock: () => {}
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
