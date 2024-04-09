import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbNurse } from "react-icons/tb";
import service_1 from "../assets/Service_1.jpg";
import service_2 from "../assets/Service_2.jpg";
import service_3 from "../assets/Service_3.jpg";
import service_4 from "../assets/Service_4.jpg";
import service_5 from "../assets/Service_5.jpg";
import service_6 from "../assets/Service_6.jpg";
import service_7 from "../assets/Service_7.jpg";
import service_8 from "../assets/Service_8.jpg";
import service_9 from "../assets/Service_9.jpg";
import service_10 from "../assets/Service_10.jpg";

const services = [
  {
    image: service_1,
    title: "Home Nursing",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_2,
    title: "24 Hours In-Home Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_3,
    title: "Post Hospitalization",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_4,
    title: "Nurse Visits",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_5,
    title: "Ventilator Care at Home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_6,
    title: "Palliative care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_7,
    title: "Elderly Care Services",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_8,
    title: "Post Operative Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_9,
    title: "Pediatric Palliative care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_10,
    title: "Paralytic Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
];

const Services = () => {
  return (
    <section className="service">
      <Container>
        <Row>
          <Col className="header ">
            <h2 className="fs-3 fw-semibold">What Services we offer</h2>
            <p>
              At Carehub Healthcare, we offer a wide range of comprehensive
              services designed to cater to the unique needs of our clients.
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-wrap g-4">
          {services.map((service) => {
            return (
              // <Col xs={12} md={6} lg={3} className="d-flex flex-column">
              //   <Card className="service_card border-0 flex-grow-1">
              //     <img src={service.image} className="service_img" />
              //     <Card.Body className="px-0">
              //       <Card.Title className="comp_service-title">
              //         <h6>{service.title}</h6>
              //       </Card.Title>
              //       <Card.Text className="comp_service-para mb-1">
              //         {service.para}
              //       </Card.Text>
              //       <button className="service_btn">Learn More</button>
              //     </Card.Body>
              //   </Card>
              // </Col>
              <Col xs={12} md={6} lg={4} xl={3}>
                <div className="service2_card">
                  <img
                    src={service.image}
                    className="service_img"
                    width="100%"
                  />
                  <div className="service2_card-body">
                    <TbNurse className="service2_icon" />
                    <h5>{service.title}</h5>
                    <p>
                      At Carehub Healthcare, we offer a wide range of
                      comprehensive services.
                    </p>
                    <button className="service2_btn">
                      Learn More
                      <FaLongArrowAltRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
