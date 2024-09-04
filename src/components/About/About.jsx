import "./About.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward, FaUsers } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <ScrollAnimation animateIn="animate__fadeInLeftBig">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Me" />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRightBig">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3 Years+ Working</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>10+</small>
              </article>
              <article className="about__card">
                <FaUsers className="about__icon" />
                <h5>Education</h5>
                <small>
                  Bachelor of Science(honours) in Information and Communications
                  Technology
                </small>
              </article>
            </div>
            <p>
              Hello! I am a software engineer interested in high-performance
              web/backend applications. I love tackling challenges and learning
              about new modern computer languages.
            </p>
            <a href="#contact" className="btn btn-primary">
              <span>Let's Talks</span>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
