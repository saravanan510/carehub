import React from "react";
import PrivateNursing_details from "../components/PrivateNursing_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const PrivateNursing = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">
            24 HOURS IN-HOME NURSING SERVICES
          </h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Home Nursing Services</li>
          </ul>
        </Container>
      </div>
      <PrivateNursing_details />
    </>
  );
};

export default PrivateNursing;
