import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    BballAddictsDesc:
      "A web app that helps connect basketball players across London. Create, delete and join games near you. This project was made in React with AWS technologies for the backend.",
    BballAddictsGithub: "https://github.com/Chris33871/Basketball_App",
    BballAddictsWebsite: "https://www.whoseplaying.com/",

    BroadbandDesc:
      "A website that gives broadband insights to companies wanting to change their office location.",
    BroadbandGithub: "",
    BroadbandWebsite: "",

    BankGreenDesc:
      "A company aiming to defund fossil fuels by providing a platform to understand how banks use their money, how to switch to a greener bank and analysis on which banks are the greenest.",
    BankGreenGithub: "https://github.com/bank-green",
    BankGreenWebsite: "https://bank.green/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }
  if (desc[projectName + "Website"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          style={{ display: show }}
          href={desc[projectName + "Website"]}
          target="_blank"
        >
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
