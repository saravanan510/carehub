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
const VentilatorCare_details = () => {
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
    <>
      {/* <section>
        <Container>
          <Row className="g-5">
            <Col className="text-start pe-5" lg={9}>
              <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
                Post Operative Care
              </h2>
              <p>
                Anybody's life can be completely upended by a serious sickness,
                accident, or other health incident. So it might be easy to think
                of a loved one being released from the hospital as the point at
                which everything returns to normal. Sadly, this is frequently
                not the case. The month or months following a hospital release
                reflect a high-risk period with frequent hospital visits.
                Seniors returning from the hospital frequently need assistance,
                including non-medical in-home care.
              </p>
              <p>
                Unfortunately, a lot of individuals underestimate the
                difficulties and risks associated with leaving the hospital.
                Therefore, the in-home care team at Carehub Services has created
                this brief guide to help you or a loved one close to you decide
                whether or not post-hospital discharge care is the correct
                choice
              </p>

              <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
                Services
              </h4>
              <Row>
                <Col>
                  <ul className="service_page_features_list">
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Comprehensive care: Carehub Services provides a wide
                        range of home health care services that are tailored to
                        meet the unique needs of each patient after
                        hospitalization. This includes everything from wound
                        care and medication management to physical therapy and
                        occupational therapy.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Skilled and experienced staff: Our team of nurses,
                        therapists, and other healthcare professionals are
                        highly skilled and experienced in providing
                        post-hospitalization care. They are dedicated to helping
                        patients regain their strength and independence as
                        quickly and safely as possible.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Convenience and comfort: With home health care services
                        from Carehub healthcare Services, patients can recover
                        in the comfort of their own home rather than in a
                        hospital or nursing home. This can be a more comfortable
                        and less stressful option for many people.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Coordination with other healthcare providers: Our staff
                        works closely with patients' physicians, hospitals, and
                        other healthcare providers to ensure that all aspects of
                        their care are coordinated and that their recovery is on
                        track.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Continuous monitoring: Our staff will keep a watchful
                        eye on the patient's condition and report any changes or
                        concerns to the physician. They will also provide
                        education and support to the patient and their family so
                        that they can manage their care at home.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Cost-effective: Getting post-hospitalization home health
                        care services can often be a more cost-effective option
                        than staying in a hospital or nursing home. It can also
                        help to avoid unnecessary readmissions to the hospital.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Quality care: At Carehub healthcare Services, we are
                        committed to providing high-quality care to our
                        patients. Our staff is regularly trained and updated
                        with the latest techniques and technologies to provide
                        the best care possible.
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
              <p>
                In conclusion, Carehub Services is a great option for
                post-hospitalization home health care services. We provide
                comprehensive care, have a skilled and experienced staff, offer
                convenience and comfort, coordinate with other healthcare
                providers, continuously monitor the patient, cost-effective and
                provide quality care. Contact us today to learn more about how
                we can help you or your loved one recover after a hospital stay.
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
      </section> */}
      <section>
        <Container>
          <Row className="g-4">
            <Col className="text-start pe-5" lg={9}>
              <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
                Ventilator Care
              </h2>
              <p>
                Ventilators at home were an anomaly until a few years ago. It
                was thought of as risky and people believed that it was not a
                medically safe decision to provide nursing care to a patient on
                a ventilator at home. However, times have changed. Numerous
                medical and healthcare services are now available in the comfort
                of one’s home and nursing care for mechanical ventilation is one
                of them. It is completely safe to keep a patient on a ventilator
                at home if you are under the guidance of the carehub healthcare
                service providers. With a little training and practice, or
                assistance from professional nurses and healthcare staff, it is
                possible for home care for ventilator patients to be surrounded
                by family and loved ones while receiving nursing care for
                mechanical ventilation
              </p>

              <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
                What Are the Benefits Of Nursing Ventilator Care?
              </h4>
              <p>
                The benefits of a patient receiving nursing ventilator care at
                home are numerous. Nursing care of a patient on a ventilator at
                home ensures that the patient feels more safe, comfortable and
                at ease compared to a hospital or healthcare facility. Receiving
                nursing ventilator care at home ensures that the patient is
                surrounded by loved ones and family, instead of in a stressful
                and tense environment of a hospital among other patients. At
                home, the patient experiences peace of mind and there’s a high
                chance that the patient might recover faster at home. Nursing
                ventilator care at home also reduces the risk of the patient
                acquiring infections from the hospital. Home ventilator care is
                much safer since the chances of catching an infection from
                caregivers or family members are comparatively low
              </p>
              <p>
                The benefits can be further categorized into medical and
                personal benefits.
              </p>

              <Row>
                <Col>
                  <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
                    Medical Benefits
                  </h4>
                  <ul className="service_page_features_list">
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Access to service of qualified, experienced and
                        internationally trained medical professionals right in
                        the comfort of your home
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Smooth flow of information between the team of doctors,
                        care staff and the family members
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Use of the latest technology and devices that ensures
                        wellbeing and care of the patient in their own home
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Strict adherence to standard protocols of critical care
                        to ensure the safety and wellbeing of the patient
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Continuous monitoring of the patient’s vitals and
                        regular administration of medication at home itself
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Faster recovery of patients due to patient satisfaction
                        and better compliance by medical professionals
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Reduced chances of secondary infections
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
                    Personal Benefits
                  </h4>
                  <ul className="service_page_features_list">
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        A comfortable home environment with less noise and less
                        night time light can improve sleep patterns and overall
                        well-being.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Limited or no restriction on visiting hours by friends,
                        family and relatives
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Easy and convenient access to personal space and
                        belongings such as books, computers, etc.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        More cost effective and affordable as compared to the
                        hospital ICU
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Better management of patient’s needs and personalized
                        care and attention
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Reduced length of stay at the hospital and away from
                        home
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Faster rehabilitation into normal life because of
                        smoother transition from hospital to home
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
              <p>
                The critical care team at home can take care of all the
                following tasks and the patient’s family can remain stress free
                with the assurance that the patient is well taken care of.
              </p>
              <Row>
                <Col>
                  <ul className="service_page_features_list">
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Nursing care for ventilated patients with Tracheostomy
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Nursing ventilator care for patients who are on CPAP or
                        BiPAP and/or High Flow Oxygen Therapy
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Total parenteral nutrition
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Internal feeding
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Infusion therapy
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Bowel and bladder management
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Maintaining skin integrity
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
    </>
  );
};

export default VentilatorCare_details;
