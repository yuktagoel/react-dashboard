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
     <ul>
          <li className="nav-sec">
            <div className="nav-item active">
            {SideBarItems.map((value) => {
          return <li>{value}</li>;
        })}
            </div>
            </li>
</ul>
<ul>
          <li className="nav-sec">
            <div className="nav-item active">
            {SideBarUtilItems.map((value) => {
          return <li>{value}</li>;
        })}
            </div>
            </li>
</ul>
      </div>
  );
}

export default SideBarContainer;


<ul>
          <li className="nav-sec">
            <div className="nav-item active">
              Home
            </div>
            </li>
</ul>