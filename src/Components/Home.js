import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>CHRISTIAN HARRIES</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            My main focus is on learning as much as I can. I love the journey of
            expanding my knowledge on anything software related. My goal become
            an expert in my field of work and be able to create/build projects
            that have a real positive impact on people's lives.
            <br />
            <br />I also love working on <b>algorithmic</b> problems and am
            active on LeetCode
            <br />
            <br />I am fluent in <b>Python and JavaScript</b> and know a bit of{" "}
            <b>C</b> and am working on a few projects using <b>TypeScript</b>.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
            <b> C# </b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
