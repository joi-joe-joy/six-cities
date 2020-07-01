import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

const offers = [{
  city: `Paris`,
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
  coordinations: [52.3909553943508, 4.929309666406198],
  reviews: [],
  nearOffers: [
    {
      id: 2,
      title: `Wood and stone place`,
      premium: false,
      pictures: [
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/room.jpg`,
        `img/studio-01.jpg`,
        `img/studio-photos.jpg`
      ],
      price: 180,
      rating: 4.3,
      type: `hotel`,
      bedrooms: 2,
      amenities: [`Indoor fireplace`, `Kitchen`, `Wifi`, `Washer`],
      maxGuestsNumber: `Max 2 adults, 2 children`,
      description: `Newly renovated quiet cozy haven in the middle of the hustle and bustle of New York City with breathtaking views of the Manhattan skyline from every window.`,
      host: {
        photo: `img/avatar-max.jpg`,
        name: `Maxim Doff`,
        super: false
      },
      coordinations: [52.369553943508, 4.85309666406198],
      reviews: [
        {
          id: 5,
          author: {
            photo: `img/avatar-angelina.jpg`,
            name: `Monica`
          },
          description: `bedrooms – couples and groups of friends will find this accommodation`,
          date: 1593095836000,
          rating: 3
        },
        {
          id: 6,
          author: {
            photo: `img/avatar-angelina.jpg`,
            name: `Bell Gover`
          },
          description: `friends will find this accommodation`,
          date: 1603095836000,
          rating: 5
        }
      ]
    },
  ]
},
{
  city: `Paris`,
  title: `Nice, cozy, warm big bed apartment`,
  premium: false,
  pictures: [
    `img/apartment-01.jpg`,
  ],
  price: 80,
  rating: 4.2,
  type: `room`,
  bedrooms: 1,
  amenities: [`Iron`, `TV`, `Hangers`, `Hair dryer`],
  maxGuestsNumber: `Max 1 adult`,
  description: `This apartment is flooded with light. It is 2 blocks from the 6 train and 6 from the q train. It is is a opulent area, 5 minute walk from Central Park. It's a 5 floor walk up, but stairs are easy and wide. There is an eat-in kitchen plus small dining room table. Beautiful, clean, lovely apartment.`,
  host: {
    photo: ``,
    name: `Alicia Bell`,
    super: false
  },
  coordinations: [52.3909553943508, 4.929309666406198],
  reviews: [],
  nearOffers: [
    {
      id: 2,
      title: `Wood and stone place`,
      premium: false,
      pictures: [
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/room.jpg`,
        `img/studio-01.jpg`,
        `img/studio-photos.jpg`
      ],
      price: 180,
      rating: 4.3,
      type: `hotel`,
      bedrooms: 2,
      amenities: [`Indoor fireplace`, `Kitchen`, `Wifi`, `Washer`],
      maxGuestsNumber: `Max 2 adults, 2 children`,
      description: `Newly renovated quiet cozy haven in the middle of the hustle and bustle of New York City with breathtaking views of the Manhattan skyline from every window.`,
      host: {
        photo: `img/avatar-max.jpg`,
        name: `Maxim Doff`,
        super: false
      },
      coordinations: [52.369553943508, 4.85309666406198],
      reviews: [
        {
          id: 5,
          author: {
            photo: `img/avatar-angelina.jpg`,
            name: `Monica`
          },
          description: `bedrooms – couples and groups of friends will find this accommodation`,
          date: 1593095836000,
          rating: 3
        },
        {
          id: 6,
          author: {
            photo: `img/avatar-angelina.jpg`,
            name: `Bell Gover`
          },
          description: `friends will find this accommodation`,
          date: 1603095836000,
          rating: 5
        }
      ]
    },
  ]
}];

describe(`Render App`, () => {
  it(`Render with offers`, () => {
    const store = mockStore({
      city: `Paris`,
      offersCityList: offers,
      citiesList: [`Paris`, `Amsterdam`, `Brussels`]
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              offers={offers}
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

