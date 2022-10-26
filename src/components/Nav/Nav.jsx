import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessage } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { useState } from "react";

const icons = [
  {
    href: "#",
    img: <AiOutlineHome />,
  },
  {
    href: "#about",
    img: <AiOutlineUser />,
  },
  {
    href: "#experience",
    img: <BiBook />,
  },
  {
    href: "#portfolio",
    img: <FaProjectDiagram />,
  },
  {
    href: "#contact",
    img: <BiMessage />,
  },
];

const Nav = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <nav>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.href}
            id={index}
            key={index}
            onClick={(event) => {
              setIsActive(event.currentTarget.id);
            }}
            className={index === parseInt(isActive) ? "active" : ""}
          >
            {icon.img}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
