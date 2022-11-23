import "./ImgMe.css";
import me from "../../assets/oswin.png";

const ImgMe = () => {
  return (
    <div className="wrapper">
      <div className="imgWrapper">
        <img src={me} alt="me" />
      </div>
    </div>
  );
};

export default ImgMe;
