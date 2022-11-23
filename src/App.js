import { Fragment } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import AnimatedCursor from "react-animated-cursor";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import ImgMe from "./components/ImgMe/ImgMe";

const App = () => {
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
      <ScrollAnimation animateIn="animate__fadeIn">
        <Header />
        <ImgMe />
      </ScrollAnimation>
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
        <Contact />
      </ScrollAnimation>
      <Footer />
    </Fragment>
  );
};

export default App;
