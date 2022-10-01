import React from "react";
import SideBarContainer from "./SideBarContainer.tsx";
import SideBarLogo from "./SideBarLogo.tsx";
import "../../styles.css";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarLogo />
      <SideBarContainer />
    </div>
  );
}

export default SideBar;
