import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 5,
  author: {
    photo: `img/avatar-angelina.jpg`,
    name: `Monica`
  },
  description: `bedrooms – couples and groups of friends will find this accommodation`,
  date: 1593095836000,
  rating: 3
};


describe(`Render Review`, () => {
  it(`Render Review correctly`, () => {
    const tree = renderer
      .create(<Review review={review}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

