import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const settings = {
    rentCount: 311
  };

  ReactDOM.render(
      <App
        rentCount={settings.rentCount}
      />,
      document.getElementById(`root`)
  );
};

init();
