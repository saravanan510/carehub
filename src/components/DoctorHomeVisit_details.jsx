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
const DoctorHomeVisit_details = () => {
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
              Doctor Home Visits
            </h2>
            <p>
              Having access to a doctor at the comfort of your home was a
              privilege few could enjoy until now. Carehub Doctor Home Visit
              service eliminates the disruptions to normal life due to frequent
              trips for tests and reviews. With our Doctor Home visits, you can
              now have doctors and physicians conduct a detailed assessment and
              provide expert guidance in treating individual needs at your
              residence.
            </p>
            <p>
              Based on the patient’s condition, our doctors create a detail care
              plan for recovery. Senior citizens who may be immobile, patients
              recovering from chronic diseases or major surgeries especially
              benefit from our Doctor consultations at home. Some of the
              services provided during our visits are:
            </p>

            <Row>
              <Col>
                <ul className="service_page_features_list">
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Physical examination and vitals monitoring
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Coordination of skilled nurses and treatment protocols
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Referral for physical therapy and any other specialized
                      rehabilitation services
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Follow up care for chronic conditions including but not
                      limited to Heart diseases, Stroke, Parkinson’s disease,
                      Arthritis, Diabetes, COPD and kidney and Liver disorders
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

export default DoctorHomeVisit_details;