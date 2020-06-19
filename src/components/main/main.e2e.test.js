import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    premium: true,
    picture: `img/apartment-01.jpg`,
    price: 380,
    rating: 5,
    type: `apartment`
  }
];

it(`Should tab-city be pressed`, () => {
  const onLocationTabClick = jest.fn();

  const main = shallow(
      <Main
        rentCount={3}
        offers={offers}
        onLocationClick={onLocationTabClick}
      />
  );

  const locationTab = main.find(`a.locations__item-link.tabs__item.tabs__item--active`);

  locationTab.props().onClick();

  expect(onLocationTabClick.mock.calls.length).toBe(1);
});
