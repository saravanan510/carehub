import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import DoctorHomeVisit_details from "../components/DoctorHomeVisit_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const DoctorHomeVisit = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Doctor Home Visit</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Doctor Home Visit</li>
          </ul>
        </Container>
      </div>
      <DoctorHomeVisit_details />
      <PrivateNursing_list />
    </>
  );
};

export default DoctorHomeVisit;
