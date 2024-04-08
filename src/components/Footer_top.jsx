import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/carehub-logo.jpg";
import { LiaUserNurseSolid } from "react-icons/lia";

const Footer_top = () => {
  return (
    <div className="py-3" style={{ background: "#F9F9F9" }}>
      <Container>
        <Row>
          <Col className="ft_item" md={6} sm={12}>
            <img src={Logo} width="80px" />
            <div>
              <h5>Carehub Healthcare</h5>
              <p>At Carehub Healthcare</p>
            </div>
          </Col>
          <Col className="ft_item" md={6} sm={12}>
            <img src={Logo} width="80px" />
            <div>
              <h5>+ (123) 1800 - 567 - 8990</h5>
              <p>At Carehub Healthcare</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer_top;
