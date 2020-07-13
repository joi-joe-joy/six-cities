import React from "react";
import renderer from "react-test-renderer";
import {PageType} from "../../const";
import Map from "./map.jsx";

jest.mock(`leaflet`);

const coordinations = [
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

describe(`Render Map`, () => {
  it(`Renderer Map correctly`, () => {
    const tree = renderer.create(
        <Map
          type={PageType.PROPERTY}
          offersCords={coordinations}>
          <div/>
        </Map>, {
          createNodeMock: () => {}
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renderer Map correctly with current`, () => {
    const tree = renderer.create(
        <Map
          type={PageType.PROPERTY}
          currentCords={coordinations[0]}
          offersCords={coordinations}
        >
          <div/>
        </Map>, {
          createNodeMock: () => {}
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
