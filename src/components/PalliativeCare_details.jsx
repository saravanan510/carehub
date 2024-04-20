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
const PalliativeCare_details = () => {
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
              Palliative Care
            </h2>
            <p>
              Palliative care is an essential service that provides comfort and
              support to individuals who are living with a serious illness. At
              Carehub in Dubai, we understand the importance of providing
              top-quality palliative care services in the comfort of one's own
              home. Our team of highly trained and compassionate nurses and
              healthcare professionals is dedicated to helping individuals and
              their families navigate the challenges of a serious illness with
              dignity and grace.
            </p>

            <p>
              One of the key benefits of getting palliative care services at
              home is the ability to receive care in a familiar and comfortable
              environment. Our team of nurses and healthcare professionals will
              work closely with you and your family to create a personalized
              care plan that meets your unique needs and preferences. This may
              include managing symptoms such as pain, fatigue, and nausea, as
              well as providing emotional support and assistance with daily
              activities.
            </p>
            <p>
              In addition to providing care at home, our team at Carehub
              Services also offers a range of support services, including
              bereavement counseling and assistance with end-of-life planning.
              We understand that a serious illness can be a difficult and
              emotional time for both the individual and their family, and our
              goal is to provide compassionate and understanding care every step
              of the way.
            </p>
            <p>
              At Carehub Services, we pride ourselves on being a trusted and
              reliable source of palliative care services in Dubai and across
              UAE. Our team of highly trained and experienced nurses and
              healthcare professionals is committed to providing the highest
              quality care, and we strive to make a positive difference in the
              lives of those we serve.
            </p>
            <p>
              If you or a loved one is living with a serious illness and in need
              of palliative care services, we invite you to contact us to learn
              more about how we can help. Our team is available 24/7 to answer
              any questions you may have and to help you get the care and
              support you need.
            </p>
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

export default PalliativeCare_details;
