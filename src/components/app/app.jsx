import React, {PureComponent} from "react";
import Main from "../main/main";
import pt from 'prop-types';

const onLocationClick = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {rentCount, offers} = this.props;

    return <Main
      rentCount={rentCount}
      offers={offers}
      onLocationClick={onLocationClick}
    />;
  }
}

App.propTypes = {
  rentCount: pt.number.isRequired,
  offers: pt.array.isRequired
};

export default App;
