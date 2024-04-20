import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import FeatureIcon from "../assets/features.svg";

const services = [
  "24 HOURS IN-HOME NURSING SERVICES",
  "POST OPERATIVE CARE",
  "VENTILATOR CARE AT HOME",
  "PALLIATIVE CARE",
  "ELDERLY CARE SERVICES/CARETAKERS",
  "PEDIATRIC PALLIATIVE CARE SERVICES AT HOME",
  "PARALYTIC CARE SERVICES AT HOME",
  "PARKINSON CARE",
  "PHYSIOTHERAPY SERVICES",
  "DOCTOR HOME VISITS",
  "MEDICAL TOURISM",
  "INJECTION SERVICES AT HOME",
  "BLOOD TEST AT HOME",
  "HYDRAFACIAL SERVICES AT HOME",
];
const BloodTest_details = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    service: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .send("service_rfhez58", "template_yvq22yp", form, {
        publicKey: "9oAfAPIpODABx48KN",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col className="text-start pe-5" lg={9}>
            <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
              Blood Test at Home
            </h2>
            <p>
              If you are looking for an emergency Lab test at home, Carehub is
              with you to provide blood sample collection at Home with 24*7
              support.Carehub partnered with top certified diagnostic centres in
              Dubai. Going to the diagnostic centre and booking a lab test is a
              hazardous process. So to overcome such problems Carehub made
              simple solutions to collect blood samples from your doorstep with
              our nurse. Booking a lab test at home is quick and easy with
              Carehub.
            </p>

            <Row>
              <Col>
                <ul className="service_page_features_list">
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Once a patient books a test, our nurse will visit your
                      home on the agreed time slot and collects the blood/urine
                      sample.
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      After collecting blood/urine samples nurse will submit the
                      samples to the lab for testing.
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Your reports will be delivered in 24-48 hours. • We
                      provide different types of packages based on patient age
                      and according to his need, and we also do health checkups
                      and full-body checkups!
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="booking text-start rounded-4">
            <h4 className="fs-5 fw-bold mb-3" style={{ color: "#012a4a" }}>
              Book Appointment
            </h4>
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <br />
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={form.fullName}
                onChange={handleChange}
                className="border mb-2"
                required
              />
              <br />
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="border mb-2"
                required
              />
              <br />
              <label>Phone Number</label>
              <br />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="border mb-2"
                required
              />
              <br />
              <label>Appointment Date</label>
              <br />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border mb-2"
                required
              />
              <br />
              <label>Choose Service</label>
              <br />
              <select
                value={form.service}
                name="service"
                onChange={handleChange}
                className="servicedrop border mb-3"
                required
              >
                <option>Select category</option>
                {services.map((ele, i) => {
                  return <option value={ele}>{ele}</option>;
                })}
              </select>
              <br />
              <input type="submit" className="formbtn" />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BloodTest_details;
