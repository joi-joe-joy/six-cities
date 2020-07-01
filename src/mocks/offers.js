export default [
  {
    id: 1,
    city: `Paris`,
    title: `Beautiful & luxurious apartment at great location`,
    premium: true,
    pictures: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/studio-photos.jpg`
    ],
    price: 380,
    rating: 5,
    type: `apartment`,
    amenities: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    bedrooms: 4,
    maxGuestsNumber: `Max 4 adults`,
    description: `This cozy and complete apartment in the heart of New York is a typical, traditional and authentic feel for how New Yorkers live. I welcome all guests to stay at this place during their stay and visit of New York. 
    Please note that this apartment is on the sixth floor and there is no lift (elevator).
    The apartment is convenient for all guests, fitted with a kitchen, small dining area and two bedrooms – couples and groups of friends will find this accommodation most optimal.`,
    host: {
      photo: `img/avatar-angelina.jpg`,
      name: `Angelina Jonson`,
      super: true
    },
    coordinations: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Strange jober`
        },
        description: `small dining area and two bedrooms – couples and groups of friends will find this accommodation`,
        date: 1593095836000,
        rating: 3
      },
      {
        id: 2,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Monica`
        },
        description: `bedrooms – couples and groups of friends will find this accommodation`,
        date: 1583085836000,
        rating: 2
      },
      {
        id: 3,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Bell Gover`
        },
        description: `friends will find this accommodation`,
        date: 1573096836000,
        rating: 4
      },
      {
        id: 4,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Strange jober`
        },
        description: `small dining area and two bedrooms – couples and groups of friends will find this accommodation`,
        date: 1593095836000,
        rating: 3
      },
      {
        id: 5,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Monica`
        },
        description: `bedrooms – couples and groups of friends will find this accommodation`,
        date: 1583085836000,
        rating: 2
      },
      {
        id: 6,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Bell Gover`
        },
        description: `friends will find this accommodation`,
        date: 1573096836000,
        rating: 4
      },
      {
        id: 7,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Strange jober`
        },
        description: `small dining area and two bedrooms – couples and groups of friends will find this accommodation`,
        date: 1593095836000,
        rating: 3
      },
      {
        id: 8,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Monica`
        },
        description: `bedrooms – couples and groups of friends will find this accommodation`,
        date: 1583085836000,
        rating: 2
      },
      {
        id: 9,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Bell Gover`
        },
        description: `friends will find this accommodation`,
        date: 1573096836000,
        rating: 4
      },
      {
        id: 10,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Strange jober`
        },
        description: `small dining area and two bedrooms – couples and groups of friends will find this accommodation`,
        date: 1593095836000,
        rating: 3
      },
      {
        id: 11,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Monica`
        },
        description: `bedrooms – couples and groups of friends will find this accommodation`,
        date: 1583085836000,
        rating: 2
      },
      {
        id: 12,
        author: {
          photo: `img/avatar-angelina.jpg`,
          name: `Bell Gover`
        },
        description: `friends will find this accommodation`,
        date: 1573096836000,
        rating: 4
      }
    ],
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
  },
  {
    id: 2,
    city: `Paris`,
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
    ],
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
  },
  {
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
  },
  {
    id: 4,
    city: `Brussels`,
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
    ],
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
  }
];
