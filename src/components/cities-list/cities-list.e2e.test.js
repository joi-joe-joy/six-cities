import React from "react";
import {shallow} from "enzyme";
import {CitiesList} from "./cities-list";

it(`Tab should be pressed`, () => {
  const onLocationClick = jest.fn();

  const citiesList = shallow(
      <CitiesList
        onLocationClick={onLocationClick}
      />
  );

  const cityTab = citiesList.find(`a.locations__item-link.tabs__item`).at(1);
  cityTab.simulate(`click`, {preventDefault() {}});
  expect(onLocationClick).toHaveBeenCalledTimes(1);
});

it(`When presses tab, link does not link`, () => {
  const onLocationClick = jest.fn();

  const citiesList = shallow(
      <CitiesList
        onLocationClick={onLocationClick}
      />
  );

  const cityTab = citiesList.find(`a.locations__item-link.tabs__item`).at(1);
  const linkPrevention = jest.fn();

  cityTab.simulate(`click`, {
    preventDefault: linkPrevention
  });

  expect(onLocationClick).toHaveBeenCalledTimes(1);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});

it(`User click passed to callback is consistent with "city" prop`, () => {
  const onLocationClick = jest.fn((...args) => [...args]);
  const city = `Paris`;

  const citiesList = shallow(
      <CitiesList
        onLocationClick={onLocationClick}
      />
  );

  const cityTab = citiesList.find(`a.locations__item-link.tabs__item`).at(0);

  cityTab.simulate(`click`, {preventDefault() {}});

  expect(onLocationClick).toHaveBeenCalledTimes(1);
  expect(onLocationClick.mock.calls[0][0]).toEqual(city);
});
