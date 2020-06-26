import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
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
