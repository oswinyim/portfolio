import CvContactMe from "./CvContactMe";
import "./Header.css";
import Socials from "./Socials";
import SpecialTitle from "./SpecialTitle";
import LOGO from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Oswin Yim</h1>
        <img className="logo" src={LOGO} alt="Oswin" href="" />
        <SpecialTitle
          className="text-light"
          titles={[
            "Frontend Developer",
            "Web Developer",
            // "Junior Full Stack Developer",
            "Software Developer",
          ]}
        />
        <CvContactMe />
        <Socials />
        <a href="#contact" className="scroll__down">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
