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
    <>
      <ul>
        {SideBarItems.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
      <ul>
        {SideBarUtilItems.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default SideBarContainer;
