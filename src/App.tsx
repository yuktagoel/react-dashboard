import React from "react";

import Navbar from "./components/Navbar/Navbar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import "./styles.css";

function App(): JSX.Element {
  return (
    <div className="wraper">
      <SideBar />
      <Navbar  />
    </div>
  );
}

export default App;
