import React from "react";
import ElderlyCare_details from "../components/ElderlyCare_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const ElderlyCare = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Elderly Care</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Elderly Care</li>
          </ul>
        </Container>
      </div>
      <ElderlyCare_details />
    </>
  );
};

export default ElderlyCare;
