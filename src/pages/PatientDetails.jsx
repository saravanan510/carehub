import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
const PatientDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <section>
        <Container>
          <Row>
            <div>
              <h4>Patient Detail Form</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="">First Name</label>
                  <input
                    className="custom-input"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <input
                    className="custom-input"
                    {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                  />
                </div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input
                    className="custom-input"
                    type="number"
                    {...register("age", { min: 18, max: 99 })}
                  />
                </div>
                <div>
                  <label htmlFor="">Comment</label>
                  <input
                    className="custom-input"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                </div>

                <input type="submit" value={"Book Appointment"} />
              </form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default PatientDetails;
