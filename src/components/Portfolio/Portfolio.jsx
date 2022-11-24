import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Portfolio.css";
import QR_CODE_COMPONENT_IMG from "../../assets/qr-code-component.png";
import PRODUCT_PREVIEW_CARD_GIF_IMG from "../../assets/product-preview-card.gif";
import MODERN_LOGIN_IMG from "../../assets/modern-login.png";
import AIRBNB_CLONE_IMG from "../../assets/airbnb-clone.gif";
import INTERACTIVE_RATING_IMG from "../../assets/interactive-rating.png";

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
      name: "Live",
      href: "https://airbnb-clone-self-eight.vercel.app/",
    },
  },
  {
    name: "Modern login",
    img: MODERN_LOGIN_IMG,
    skill: "React JS,Custom Hook(useHttp) ,useContext,Firebase",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/modern-firebase-login",
    },
    demo: { name: "Live", href: "https://modern-firebase-login.vercel.app/" },
  },
  {
    name: "Product preview card",
    img: PRODUCT_PREVIEW_CARD_GIF_IMG,
    skill: "CSS Grid, Flexbox, Mobile-first workflow, Styled Components",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/product-preview-card-component-main",
    },
    demo: {
      name: "Live",
      href: "https://product-preview-card-component-main-oswinyim.vercel.app/",
    },
  },
  {
    name: "QR code component",
    img: QR_CODE_COMPONENT_IMG,
    skill: "CSS Grid, Mobile-first workflow, Styled Components",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/qr-code-component",
    },
    demo: {
      name: "Live",
      href: "https://qr-code-component-du1xvt9h5-oswinyim.vercel.app/",
    },
  },
  {
    name: "Interactive rating component",
    img: INTERACTIVE_RATING_IMG,
    skill:
      "CSS Grid, Mobile-first workflow, Event delegation, Styled Components",
    code: {
      name: "Github",
      href: "https://github.com/oswinyim/interactive-rating-component-main",
    },
    demo: {
      name: "Live",
      href: "https://interactive-rating-component-main-ashy.vercel.app/",
    },
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
                <img src={portfolio.img} alt="" style={{ fontSiz: "10p" }} />
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
