import React from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function SideBarLogo() {
  return (
    <div className="wrapper-SideBarLogo">
      <FontAwesomeSvgIcon
        className="SideBarLogo"
        icon={faCoffee}
        style={{ height: "20px" }}
      />
      <div className="SideBar-title">Dashboard</div>
    </div>
  );
}

export default SideBarLogo;
