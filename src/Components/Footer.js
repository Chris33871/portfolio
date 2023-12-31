import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Built using React</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className="footerLinks">
        <a href="https://github.com/Chris33871" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/christianhrs/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:christian.harries12@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/Chris33871/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
