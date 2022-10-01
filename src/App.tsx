import React from "react";

import Navbar from "./components/Navbar/Navbar.tsx";
import ProjectSection from "./components/ProjectSection/ProjectSection.tsx";
import RightBar from "./components/RightBar/RightBar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import "./styles.css";

function App(): JSX.Element {
  return (
    <div className="wraper">
      <Navbar  />
      <SideBar />
    <div className="content">
      <ProjectSection/>
      <RightBar />
    </div>
    </div>
  );
}

export default App;
