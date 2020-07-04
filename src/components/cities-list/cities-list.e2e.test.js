import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {CitiesList} from "./cities-list";

const mockStore = configureStore([]);

it(`Tab should be pressed`, () => {
  const store = mockStore({
    city: `Paris`,
    citiesList: [`Paris`, `Amsterdam`, `Brussels`]
  });
  const onLocationClick = jest.fn();

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          citiesList={[`Paris`, `Amsterdam`, `Brussels`]}
          onLocationClick={onLocationClick}
        />
      </Provider>
  );

  const cityTab = citiesList.find(`a.locations__item-link.tabs__item`).at(1);
  cityTab.simulate(`click`, {preventDefault() {}});
  expect(onLocationClick).toHaveBeenCalledTimes(1);
});

it(`When presses tab, link does not link`, () => {
  const store = mockStore({
    city: `Paris`,
    citiesList: [`Paris`, `Amsterdam`, `Brussels`]
  });
  const onLocationClick = jest.fn();

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          citiesList={[`Paris`, `Amsterdam`, `Brussels`]}
          onLocationClick={onLocationClick}
        />
      </Provider>
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
  const store = mockStore({
    city: `Paris`,
    citiesList: [`Paris`, `Amsterdam`, `Brussels`]
  });
  const onLocationClick = jest.fn((...args) => [...args]);
  const city = `Paris`;

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          citiesList={[`Paris`, `Amsterdam`, `Brussels`]}
          onLocationClick={onLocationClick}
        />
      </Provider>
  );

  const cityTab = citiesList.find(`a.locations__item-link.tabs__item`).at(0);

  cityTab.simulate(`click`, {preventDefault() {}});

  expect(onLocationClick).toHaveBeenCalledTimes(1);
  expect(onLocationClick.mock.calls[0][0]).toEqual(city);
});
