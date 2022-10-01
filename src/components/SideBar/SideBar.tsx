import React from "react";
import SideBarContainer from "./SideBarContainer.tsx";
import SideBarLogo from "./SideBarLogo.tsx";
import "./styles.css";

function SideBar() {
  return (
    <React.Fragment>
      <SideBarLogo />
      <SideBarContainer />
    </React.Fragment>
  );
}

export default SideBar;
