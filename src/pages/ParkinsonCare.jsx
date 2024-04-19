import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import ParkinsonCare_details from "../components/ParkinsonCare_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const ParkinsonCare = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Parkinson Care</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Parkinson Care</li>
          </ul>
        </Container>
      </div>
      <ParkinsonCare_details />
      <PrivateNursing_list />
    </>
  );
};

export default ParkinsonCare;
