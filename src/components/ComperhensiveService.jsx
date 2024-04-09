import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TbNurse } from "react-icons/tb";

const cardItems = [
  {
    title: "Private Nursing",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    title: "24 Hours In-Home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    title: "Post-Hospitalization",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    title: "Palliative Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
];

const ComperhensiveService = () => {
  return (
    <section className="comp">
      <Container>
        <Row>
          <Col className="header ">
            <h2 className="fs-3 fw-semibold">Our Comprehensive Services</h2>
            <p>
              At Carehub Healthcare, we offer a wide range of comprehensive
              services designed to cater to the unique needs of our clients.
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-wrap g-4">
          {cardItems.map((item) => {
            return (
              <Col xs={12} md={6} lg={3} className="d-flex flex-column">
                <Card
                  className="comperhensive_card flex-grow-1"
                  style={{ borderColor: "#f5faf7" }}
                >
                  <Card.Body>
                    <TbNurse className="comperhensive_icon" />
                    <Card.Title className="comp_service-title">
                      <h6>{item.title}</h6>
                    </Card.Title>
                    <Card.Text className="comp_service-para">
                      {item.para}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ComperhensiveService;
