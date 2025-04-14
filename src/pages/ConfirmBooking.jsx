import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useBookingDetails } from "../context/Context";
const ConfirmBooking = () => {
  const { bookingDetails } = useBookingDetails();
  console.log("bookingDetails", bookingDetails);
  return (
    <>
      <section>
        <Container>
          <Row>
            <h4>Booking Confirmation</h4>
            <Col>
              <div>
                <h6>Patient Info</h6>
                <p>100</p>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Date & Time</h5>
              </div>
            </Col>
            <Col>
              <div>
                <button className="me-2">Change</button>
                <button>Confirm</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ConfirmBooking;
