import React from "react";
import BloodTest_details from "../components/BloodTest_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const BloodTest = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Blood Test</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Blood Test</li>
          </ul>
        </Container>
      </div>
      <BloodTest_details />
    </>
  );
};

export default BloodTest;
