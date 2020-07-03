import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main";

const mockStore = configureStore([]);

const offers = [
  {
    id: 7,
    title: `Canal View Prinsengracht`,
    premium: true,
    pictures: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/studio-photos.jpg`
    ],
    price: 280,
    rating: 3.8,
    type: `house`,
    bedrooms: 3,
    amenities: [`Indoor fireplace`, `Kitchen`, `Wifi`, `Washer`],
    maxGuestsNumber: `Max 2 adults, 1 children`,
    description: `The apartment has a Queen size bed and a very wide modern couch that turns into a bed for a single person by moving the single portion of the couch to the bottom part of the love seat portion of the couch to create a long comfortable bed for a 3rd person. I hope you will enjoy the decor, it has a european feel towards the French side. You will be in the heart of the East Village in Manhattan, considered to be one of the most exciting and dynamic neighborhoods of the world.`,
    host: {
      photo: ``,
      name: `John Donn`,
      super: true
    },
    coordinations: [52.3809553943508, 4.939309666406198]
  }
];

describe(`Render Main`, () => {
  it(`Main with offers`, () => {
    const store = mockStore({
      city: `Paris`,
      offersCityList: offers,
      citiesList: [`Paris`, `Amsterdam`, `Brussels`]
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main
              offers={offers}
              onLocationClick={()=>{}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Main without offers`, () => {
    const store = mockStore({
      city: `Paris`,
      offersCityList: offers,
      citiesList: [`Paris`, `Amsterdam`, `Brussels`]
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main
              offers={offers}
              onLocationClick={()=>{}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
