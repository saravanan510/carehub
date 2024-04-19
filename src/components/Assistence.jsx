import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Assistance from "../assets/faq.png";
import list_icon from "../assets/list-icon.svg";
import React from "react";

const AboutUs = () => {
  return (
    <section className="assistance">
      <Container>
        <Row className="g-5">
          <Col lg={8}>
            <Row className="mb-4">
              <Col>
                <h2 className="about_heading fs-3 mb-3 fw-bold">
                  Key Benefits of Choosing Carehub Healthcare
                </h2>
                <div>
                  <div className="about_list">
                    <div className="about_icon">
                      <img src={list_icon} />
                    </div>
                    <p>
                      Support with medication management/administration, enteral
                      feeding, pain management, tracheotomy, stoma and catheter
                      care.
                    </p>
                  </div>
                  <div className="about_list">
                    <div className="about_icon">
                      <img src={list_icon} />
                    </div>
                    <p>
                      Personalized care plans tailored to your unique needs,
                      medical history and personal wishes.
                    </p>
                  </div>
                  <div className="about_list">
                    <div className="about_icon">
                      <img src={list_icon} />
                    </div>
                    <p>
                      Specialist nurses in various fields including: cancer
                      care, cardiovascular conditions, later living, diabetes
                      management, lung conditions, palliative & end of life
                      care, post operative recovery, neurological
                      rehabilitation.
                    </p>
                  </div>
                  <div className="about_list">
                    <div className="about_icon">
                      <img src={list_icon} />
                    </div>
                    <p>
                      Accompaniment to and from medical appointments, advice and
                      liaison with medical professionals and post surgery
                      support.
                    </p>
                  </div>
                  <div className="about_list">
                    <div className="about_icon">
                      <img src={list_icon} />
                    </div>
                    <p>
                      Expert guidance, emotional support and continual
                      reassurance.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="about_img">
            <img src={Assistance} className=" rounded" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
