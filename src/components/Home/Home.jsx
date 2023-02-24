import { Fragment } from "react";
import AnimatedCursor from "react-animated-cursor";

import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import CodingLogoCanvas from "../CodingLogoCanvas/CodingLogoCanvas";
import Header from "../Header/Header";
import ImgMe from "../ImgMe/ImgMe";
import Nav from "../Nav/Nav";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = ({ isHK }) => {
  return (
    <Fragment>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        outerStyle={{
          border: "5px solid var(--color-primary)",
        }}
        innerStyle={{
          backgroundColor: "var(--color-bg-variant)",
        }}
      />
      <CodingLogoCanvas />
        <Header isHK={isHK} />
        <ImgMe />
      <Nav />
      <ScrollAnimation animateIn="animate__fadeIn">
        <About />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <Experience />
      </ScrollAnimation>
      {/* <Services /> */}
      <ScrollAnimation animateIn="animate__fadeInTopLeft">
        <Portfolio />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__lightSpeedInRight">
        <Contact isHK={isHK} />
      </ScrollAnimation>
      <Footer />
    </Fragment>
  );
};

export default Home;
