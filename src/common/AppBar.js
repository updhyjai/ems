import React from "react";
import appLogo from "../images/header/appLogo.png";

const AppBar = () => (
  <header className="navbar fixed-top navbar-dark bg-dark">
    <div className="navbar-brand" href="#">
      <span>
        <img alt="BlueStacks" className="app-logo" src={appLogo} />
      </span>
    </div>
  </header>
);
export default AppBar;
