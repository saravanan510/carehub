import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import PalliativeCare_details from "../components/PalliativeCare_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const PalliativeCare = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Palliative Care</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Palliative Care</li>
          </ul>
        </Container>
      </div>
      <PalliativeCare_details />
      <PrivateNursing_list />
    </>
  );
};

export default PalliativeCare;
