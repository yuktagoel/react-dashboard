import React from "react";
import Button from "./Button.tsx";
import Profile from "./Profile.tsx";
import Search from "./Search.tsx";

function Navbar(prop) {
  return (
    <div className="main">
      <div className="topNav">
        <Search />
        <Profile />
      </div>
      <div className="bottomNav">
        <Profile />
        <div className="buttonNav">
        <Button name={"new"} />
        <Button name={"upload"} />
        <Button name={"share"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
