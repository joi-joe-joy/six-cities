import * as React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {CitiesList} from "./cities-list";
import {NameSpace} from "../../reducer/name-space";

const mockStore = configureStore([]);

it(`Tab should be pressed`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      citiesList: [{
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }, {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }]
    }
  });
  const onLocationClick = jest.fn();

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          currentCity={{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }}
          citiesList={[{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            },
          }, {
            name: `Amsterdam`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }]}
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
    [NameSpace.DATA]: {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      citiesList: [{
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }, {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }]
    }
  });
  const onLocationClick = jest.fn();

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          currentCity={{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }}
          citiesList={[{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }, {
            name: `Amsterdam`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }]}
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
    [NameSpace.DATA]: {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      citiesList: [{
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }, {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      }]
    }
  });
  const onLocationClick = jest.fn((...args) => [...args]);
  const city = {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  };

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          currentCity={{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }}
          citiesList={[{
            name: `Paris`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          }]}
          onLocationClick={onLocationClick}
        />
      </Provider>
  );

  const cityTab = citiesList.find(`a.locations__item-link.tabs__item`).at(0);

  cityTab.simulate(`click`, {preventDefault() {}});

  expect(onLocationClick).toHaveBeenCalledTimes(1);
  expect(onLocationClick.mock.calls[0][0]).toEqual(city);
});
