import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiSearch } from "react-icons/fi";
import TestCard from "./TestCard";

const SelectTest = () => {
  const tests = [1, 2, 3, 4, 1, 2, 3, 4];
  return (
    <>
      <section className="selectTest">
        <Container>
          <Row>
            <Col className="header">
              <h2 className="fs-2 fw-bold">Select your test</h2>
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="Search by name ex. blood test"
                />
                <FiSearch className="fs-5" />
              </div>
            </Col>
          </Row>
          <Row>
            {tests.map((test) => {
              return (
                <Col key={test.id} lg={4} className="mb-3">
                  <TestCard />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SelectTest;
