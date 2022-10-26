import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Portfolio.css";
import LOGIN_WITH_FIREBASE_IMG from "../../assets/simple-login-with-firebase.png";
import MODERN_LOGIN from "../../assets/modern-login-form.png";
import AIRBNB_CLONE_IMG from "../../assets/airbnb-clone.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

const portfolios = [
  {
    name: "Airbnb Clone",
    img: AIRBNB_CLONE_IMG,
    skill: "Next JS, React JS, Tailwind CSS, Typescript",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/airbnb-clone",
    },
    demo: {
      name: "Demo",
      href: "https://airbnb-clone-self-eight.vercel.app/",
    },
  },
  {
    name: "Sign in & Sign up with firebase",
    img: LOGIN_WITH_FIREBASE_IMG,
    skill: "React JS, Customer Hook",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/simple-react-auth-with-firebase",
    },
    demo: {
      name: "Demo",
      href: " https://simple-react-auth-with-firebase-two.vercel.app/",
    },
  },
  {
    name: "Modern login form design",
    img: MODERN_LOGIN,
    skill: "React JS, HTML",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/modern-login-page",
    },
    demo: { name: "Demo", href: "https://modern-login-page.vercel.app/" },
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolios.map((portfolio, index) => {
          return (
            <article className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <img src={portfolio.img} alt="" />
              </div>
              <h3>{portfolio.name}</h3>
              <h3 className="text-light">{portfolio.skill}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={portfolio.code.href}
                  rel="noopener noreferrer"
                  className="btn"
                  target="_blank"
                >
                  {portfolio.code.name}
                </a>
                <a
                  href={portfolio.demo.href}
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{portfolio.demo.name}</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="portfolio__container-mobile container"
      >
        {portfolios.map((portfolio, index) => {
          return (
            <SwiperSlide className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <img src={portfolio.img} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a
                  href={portfolio.code.href}
                  rel="noopener noreferrer"
                  className="btn"
                  target="_blank"
                >
                  {portfolio.code.name}
                </a>
                <a
                  href={portfolio.demo.href}
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{portfolio.demo.name}</span>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
