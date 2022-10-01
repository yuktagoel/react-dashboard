import React from "react";

function SideBarContainer() {
  const SideBarItems: String[] = [
    "Home",
    "Profile",
    "Messages",
    "History",
    "Task",
    "Communities",
  ];
  const SideBarUtilItems: String[] = ["Setting", "Support", "Privacy"];

  return (
    <div className="liContainer">
      <ul className="SideBarItemsContainer">
        {SideBarItems.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
      <ul className="SideBarUtilContainer">
        {SideBarUtilItems.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
      </div>
  );
}

export default SideBarContainer;
