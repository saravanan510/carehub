import Carousel from "react-bootstrap/Carousel";
import Banner_1 from "../assets/Banner_1.jpg";
import Banner_2 from "../assets/Banner_2.jpg";
import Banner_3 from "../assets/Banner_3.jpg";
import Mobile_Banner_1 from "../assets/Mobile_Banner_1.jpg";
import Mobile_Banner_2 from "../assets/Mobile_Banner_2.jpg";
import Mobile_Banner_3 from "../assets/Mobile_Banner_3.jpg";
import { useMediaQuery } from "react-responsive";

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
            Compassion Is At The Heart Of Our Care
          </h1>
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
            24 Hours In-Home Care
          </h1>
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
            Post-Hospitalization Home Health Care
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
