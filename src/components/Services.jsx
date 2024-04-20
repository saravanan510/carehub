import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbNurse } from "react-icons/tb";

import { AnimatedOnScroll } from "react-animated-css-onscroll";

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
import { Link } from "react-router-dom";

const services = [
  {
    image: service_1,
    title: "HOME NURSING",
    para: "Carehub healthcare  is a leading provider of in-home care services...",
    link: "/private-nursing",
  },
  {
    image: service_2,
    title: "POST OPERATIVE CARE",
    para: "Anybody's life can be completely upended by a serious sickness...",
    link: "/post-operative-care",
  },
  {
    image: service_3,
    title: "VENTILATOR CARE ",
    para: "Ventilators at home were an anomaly until a few years ago. It was thought...",
    link: "/ventilator-care",
  },
  {
    image: service_4,
    title: "PALLIATIVE CARE",
    para: "Palliative care is an essential service that provides comfort and support to...",
    link: "/palliative-care",
  },
  {
    image: service_5,
    title: "ELDERLY CARE",
    para: "We realize that you want to be at home. However, your care demands may have...",
    link: "/elderly-care",
  },
  {
    image: service_6,
    title: "PEDIATRIC PALLIATIVE",
    para: "Pediatric Palliative care  is specialized medical care for people living with... ",
    link: "/pediatric-palliative",
  },
  {
    image: service_7,
    title: "PARALYTIC CARE ",
    para: "Looking for quality Paralytic Care Services but want to receive them in the comfort...",
    link: "/paralytic-care",
  },
  {
    image: service_8,
    title: "PARKINSON CARE",
    para: "Parkinson's disease is diagnosed, and this results in a mixture of shock, anxiety...",
    link: "/parkinson-care",
  },
  {
    image: service_9,
    title: "PHYSIOTHERAPY",
    para: "Physical therapy has made remarkable strides over the years, from its earliest...",
    link: "/physiotherapy-services",
  },
  {
    image: service_10,
    title: "DOCTOR HOME VISITS",
    para: "Having access to a doctor at the comfort of your home was a privilege few could...",
    link: "/doctor-home-visits",
  },
  {
    image: service_1,
    title: "MEDICAL TOURISM",
    para: "Carehub healthcare is a leading medical tourism company in UAE operating...",
    link: "/medical-tourism",
  },
  {
    image: service_2,
    title: "INJECTION SERVICES ",
    para: "Injection services at home- Get the facility of getting injections sitting...",
    link: "/injection-services",
  },
  {
    image: service_3,
    title: "BLOOD TEST AT HOME",
    para: "If you are looking for an emergency Lab test at home, Carehub is with you...",
    link: "/blood-test",
  },
  {
    image: service_4,
    title: "HYDRAFACIAL SERVICES ",
    para: "Hydrafacial is an innovative and non-invasive skincare treatment that combines...",
    link: "/hydrafacial-services",
  },
];

const Services = () => {
  return (
    <section className="service ">
      <Container>
        <Row>
          <Col className="header ">
            <h2 className="fs-3 fw-bold">What Services we offer</h2>
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
                <AnimatedOnScroll animationIn="animate__slideInUp">
                  <div className="service2_card animate__animated animate__slideInUp">
                    <img
                      src={service.image}
                      className="service_img"
                      width="100%"
                    />
                    <div className="service2_card-body">
                      <TbNurse className="service2_icon" />
                      <h5>{service.title}</h5>
                      <p>{service.para}</p>
                      <button className="service2_btn">
                        <Link to={service.link}>Learn More</Link>
                        <FaLongArrowAltRight className="ms-2" />
                      </button>
                    </div>
                  </div>
                </AnimatedOnScroll>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
