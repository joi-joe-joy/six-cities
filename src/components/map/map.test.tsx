import * as React from "react";
import * as renderer from "react-test-renderer";
import {PageType} from "../../types";
import Map from "./map";
import {noop} from "../../utils";

jest.mock(`leaflet`);

describe(`Render Map`, () => {
  it(`Renderer Map correctly`, () => {
    const tree = renderer.create(
        <Map
          type={PageType.PROPERTY}
        >
          <div/>
        </Map>, {
          createNodeMock: noop
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renderer Map correctly with current`, () => {
    const tree = renderer.create(
        <Map
          type={PageType.MAIN}
        >
          <div/>
        </Map>, {
          createNodeMock: noop
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
