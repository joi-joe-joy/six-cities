import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const settings = {
    rentCount: 311
  };
  const offers = [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ];

  ReactDOM.render(
      <App
        rentCount={settings.rentCount}
        offers={offers}
      />,
      document.getElementById(`root`)
  );
};

init();
