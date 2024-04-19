import Carousel from "react-bootstrap/Carousel";
import Banner_1 from "../assets/Banner_1.jpg";
import Banner_2 from "../assets/Banner_2.jpg";
import Banner_3 from "../assets/Banner_3.jpg";
import Mobile_Banner_1 from "../assets/Mobile_Banner_1.jpg";
import Mobile_Banner_2 from "../assets/Mobile_Banner_2.jpg";
import Mobile_Banner_3 from "../assets/Mobile_Banner_3.jpg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function UncontrolledExample() {
  const isMobile = useMediaQuery({ maxWidth: 475 });
  const controls = !isMobile;
  return (
    <Carousel controls={controls}>
      <Carousel.Item className="banner">
        {isMobile ? (
          <img src={Mobile_Banner_1} alt="First slide" className="" />
        ) : (
          <img src={Banner_1} alt="First slide" className="" />
        )}

        <Carousel.Caption className="banner_caption">
          <h1 className={isMobile ? "fs-3 fw-bold" : "fw-bold"}>
            Private at Home Nursing Care <br /> Services in UAE
          </h1>
          <p>
            At Care hub Healthcare, we know that people are happiest and most
            comfortable <br /> when in their own home.
          </p>
          <Link to={"/contact"}>
            <button className="banner_btn fw-semibold">Book Appointment</button>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        {isMobile ? (
          <img src={Mobile_Banner_2} alt="First slide" className="" />
        ) : (
          <img src={Banner_2} alt="First slide" className="" />
        )}
        <Carousel.Caption className="banner_caption">
          <h1 className={isMobile ? "fs-3 fw-bold" : "fw-bold"}>
            Individualized care from a dedicated <br /> nurse or team of nurses
          </h1>
          <p>
            At Care hub Healthcare, we know that people are happiest and most
            comfortable <br /> when in their own home.
          </p>
          <Link to={"/contact"}>
            <button className="banner_btn fw-semibold">Book Appointment</button>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        {isMobile ? (
          <img src={Mobile_Banner_3} alt="First slide" className="" />
        ) : (
          <img src={Banner_3} alt="First slide" className="" />
        )}
        <Carousel.Caption className="banner_caption">
          <h1 className={isMobile ? "fs-3 fw-bold" : "fw-bold"}>
            Personalized care plans tailored to <br /> your unique needs
          </h1>
          <p>
            At Care hub Healthcare, we know that people are happiest and most
            comfortable <br /> when in their own home.
          </p>

          <Link to={"/contact"}>
            <button className="banner_btn fw-semibold">Book Appointment</button>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
