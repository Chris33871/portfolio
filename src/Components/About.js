import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Christian Harries</b> and I am from Evian, France.
            I'm a <b>software developer</b> with a degree in Criminology and a{" "}
            <b>Baccalaureat in Economics</b>. <br />
            <br />I am working part time as a <b>software developer</b> at
            Bank.Green which is a software company aiming to reduce investments
            in fossil fuels. I love creating projects that I think will help
            people, you can check out some of my work in the projects section
            and on my Github.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and improve my skills. Feel free to connect with me,
            links are in the footer.
            <br />
            Apart from coding I love sports, particularily basketball, football
            and working out.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Python" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Vue" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Django" />
        <Skills skill="Flask" />
        <Skills skill="AWS" />
        <Skills skill="Firebase" />
        <Skills skill="Git" />
      </div>
    </>
  );
};

export default About;
