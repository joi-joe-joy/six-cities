import {reducer, ActionType, ActionCreator} from "./reducer.js";
import offers from "./mocks/offers.js";

let initOffers = offers.filter((offer) => offer.city === `Paris`);
let offersCityList = [
  {city: `Paris`},
  {city: `Paris`},
];

const offersList = [{
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
  city: `Amsterdam`,
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

const citiesList = [`Paris`, `Amsterdam`, `Brussels`];

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Paris`,
      offersCityList: initOffers,
      offers,
      citiesList: [`Paris`, `Amsterdam`, `Brussels`],
      currentCard: null,
      sorting: `popular`
    });
  });

  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: `Paris`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    })).toEqual({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    });
  });

  it(`Reducer should not change city by the same given value`, () => {
    expect(reducer({
      city: `Paris`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    })).toEqual({
      city: `Paris`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    });
  });

  it(`Reducer should change offers list by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offersCityList: initOffers,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    }, {
      type: ActionType.GET_OFFERS_CITY_LIST,
      payload: offersCityList
    })).toEqual({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    });
  });

  it(`Reducer should not change offers list by the same given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    }, {
      type: ActionType.GET_OFFERS_CITY_LIST,
      payload: offersCityList
    })).toEqual({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    });
  });

  it(`Reducer should change sorting by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: `top-rated`
    })).toEqual({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `top-rated`
    });
  });

  it(`Reducer should not change sorting by the same given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: `popular`
    })).toEqual({
      city: `Amsterdam`,
      offersCityList,
      offers: offersList,
      citiesList,
      currentCard: null,
      sorting: `popular`
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for change city returns correct action without city`, () => {
    expect(ActionCreator.changeCity()).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`Action creator for get city list return city list`, () => {
    expect(ActionCreator.getOffersCityList(`Amsterdam`)).toEqual({
      type: ActionType.GET_OFFERS_CITY_LIST,
      payload: [{
        id: 3,
        city: `Amsterdam`,
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
          {
            id: 3,
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
            reviews: []
          },
          {
            id: 4,
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
            coordinations: [52.3809553943508, 4.939309666406198],
            reviews: [
              {
                id: 1,
                author: {
                  photo: `img/avatar-angelina.jpg`,
                  name: `Strange jober`
                },
                description: `small dining area and two bedrooms – couples and groups of friends will find this accommodation`,
                date: 1573095836000,
                rating: 3
              }
            ]
          }
        ]
      }],
    });
  });

  it(`Action creator for change card return card`, () => {
    expect(ActionCreator.changeCard(offersList[0])).toEqual({
      type: ActionType.CHANGE_CARD,
      payload: offersList[0],
    });
  });

  it(`Action creator for change sorting returns correct action`, () => {
    expect(ActionCreator.changeSorting(`top-rated`)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `top-rated`,
    });
  });

  it(`Action creator for change sorting returns correct action without sorting`, () => {
    expect(ActionCreator.changeSorting()).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `popular`,
    });
  });
});

