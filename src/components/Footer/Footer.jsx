import "./Footer.css";

import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        Oswin Yim
      </a>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/oswinyim">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/oswinyim/">
          <GrLinkedinOption />
        </a>
        <a href="https://leetcode.com/oswinyim/">
          <SiLeetcode />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Oswin Yim 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
