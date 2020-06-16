import React from "react";
import {Main} from "../main/main";
import pt from 'prop-types';

const onLocationClick = () => {};

const App = (props) => {
  const {rentCount, offers} = props;

  return <Main
    rentCount={rentCount}
    offers={offers}
    onLocationClick={onLocationClick}
  />;
};

export default App;

App.propTypes = {
  rentCount: pt.number.isRequired,
  offers: pt.arrayOf(pt.string).isRequired
};
