import { useState } from "react";
import emailjs from "@emailjs/browser";

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

const BookAppointment = () => {
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
    <div className="booking text-start rounded-4">
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
    </div>
  );
};

export default BookAppointment;
