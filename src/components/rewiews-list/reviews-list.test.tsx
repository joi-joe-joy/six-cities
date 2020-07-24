import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";

// Return a fixed timestamp when moment().format() is called
jest.mock(`moment`, () => () => ({format: () => `2020–01–30T12:34:56+00:00`}));

const reviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }
];

describe(`Render ReviewsList`, () => {
  it(`Render ReviewsList correctly`, () => {
    const tree = renderer
      .create(<ReviewsList reviews={reviews}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ReviewsList correctly empty`, () => {
    const tree = renderer
      .create(<ReviewsList reviews={[]}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
