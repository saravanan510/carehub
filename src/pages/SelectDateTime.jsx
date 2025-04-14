import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBookingDetails } from "../context/Context";
import { MdDateRange } from "react-icons/md";
const SelectDateTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const { bookingDetails, handleDetails } = useBookingDetails();

  const handleTime = (value) => {
    setTime(value);
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <h5 className="fs-5 fw-semibold">Select Date and Time</h5>
            <div className="">
              <div className="mb-3">
                <p className="mb-2 fw-semibold">Choose Date</p>
                <DatePicker
                  // showIcon
                  // className="date_picker"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  // icon={<MdDateRange className="fs-5 custom-icon-spacing" />}
                  customInput={
                    <div className="custom-datepicker">
                      <MdDateRange className="fs-4" />
                      <input type="text" value={date.toLocaleDateString()} />
                    </div>
                  }
                />
              </div>
              <div>
                <p className="mb-2 fw-semibold">Choose Time</p>
                <div className="mb-2">
                  <p className="mb-2 me-4">Morning</p>
                  <div>
                    <button
                      className={`${
                        time == "10:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("10:00")}
                    >
                      10:00 AM
                    </button>
                    <button
                      className={`${
                        time == "10:30"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("10:30")}
                    >
                      10:30 AM
                    </button>
                    <button
                      className={`${
                        time == "11:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("11:00")}
                    >
                      11:00 AM
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="mb-2 me-4">Afternoon</p>
                  <div>
                    <button
                      className={`${
                        time == "01:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("01:00")}
                    >
                      01:00 PM
                    </button>
                    <button
                      className={`${
                        time == "02:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("02:00")}
                    >
                      02:00 PM
                    </button>
                    <button
                      className={`${
                        time == "03:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("03:00")}
                    >
                      03:00 PM
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="mb-2 me-4">Evening</p>
                  <div>
                    <button
                      className={`${
                        time == "06:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("06:00")}
                    >
                      06:00 PM
                    </button>
                    <button
                      className={`${
                        time == "07:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("07:00")}
                    >
                      07:00 PM
                    </button>
                    <button
                      className={`${
                        time == "08:00"
                          ? "custom-timepicker-selected"
                          : "custom-timepicker"
                      }`}
                      onClick={() => handleTime("08:00")}
                    >
                      08:00 PM
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <p className="m-0">Choose Date</p>
              <select
                className="date_picker"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="10:00 - 10:30">10:00 - 10:30</option>
                <option value="10:30 - 11:00">10:30 - 11:00</option>
                <option value="11:00 - 11:30">11:00 - 11:30</option>
                <option value="11:30 - 12:00">11:30 - 12:00</option>
                <option value="12:00 - 12:30">12:00 - 12:30</option>
                <option value="12:30 - 01:00">12:30 - 01:00</option>
                <option value="01:00 - 01:30">01:00 - 01:30</option>
              </select>
            </div> */}
            <div>
              <button className="custom-button me-2">
                <Link to={"/patientdetails"}>Book Appointment</Link>
              </button>
              <button className="custom-button">Cancel</button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SelectDateTime;
