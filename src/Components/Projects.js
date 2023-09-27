import React from "react";
import ProjectBox from "./ProjectBox";
import BankGreenImage from "../images/BankGreen.png";
import BroadbandImage from "../images/Broadband.png";
import BballAddictsImage from "../images/BballAddicts.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects/Work</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={BankGreenImage} projectName="BankGreen" />
        <ProjectBox projectPhoto={BroadbandImage} projectName="Broadband" />
        <ProjectBox
          projectPhoto={BballAddictsImage}
          projectName="BballAddicts"
        />
      </div>
    </div>
  );
};

export default Projects;
