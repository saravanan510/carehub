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
const PediatricPalliative_details = () => {
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
        <Row className="g-5">
          <Col className="text-start pe-5" lg={9}>
            <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
              Pediatric Palliative care Services at Home
            </h2>
            <p>
              Pediatric Palliative care is specialized medical care for people
              living with a serious illness. Palliative care focuses on
              providing relief from the symptoms and stress of the illness. The
              goal is to improve quality of life for both the child and the
              family.
            </p>
            <p>
              A specially-trained team of doctors, nurses, social workers and
              others provide palliative care. The team works together with the
              child’s other doctors as an extra layer of support. Palliative
              care is appropriate at any age and at any stage of an illness, and
              it can be provided along with treatment meant to cure.
            </p>
            <p>
              Palliative care is based on need, not prognosis, so it is best to
              bring the team in early.
            </p>
            <p>
              Pediatric palliative care addresses serious medical conditions,
              including genetic disorders, cancer, prematurity, neurologic
              disorders, heart and lung conditions and others. It relieves the
              symptoms of these diseases, such as pain, shortness of breath,
              fatigue, constipation, nausea, loss of appetite and difficulty
              sleeping, anxiety and depression. In short, it helps the child and
              the family improves their quality of life.
            </p>

            <p>
              Pediatric palliative care is family-centered. It helps with
              communication and coordination of care. With the close
              communication that palliative care provides, families are better
              able to choose options that are in line with their values,
              traditions and culture. This improves the well-being of the entire
              family.
            </p>

            <p>
              Palliative care is based on need, not prognosis. It is best to
              start palliative care as early as possible. This benefits both the
              child and the family.
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

export default PediatricPalliative_details;
