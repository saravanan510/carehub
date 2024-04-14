import React from "react";
import PrivateNursing_Banner from "../assets/PrivateNursing-Banner.jpg";
import ServicePage_list from "../components/ServicePage_list";
import ServicePage_details from "../components/ServicePage_details";
const PrivateNursing = () => {
  return (
    <>
      <div className="servicepage_banner">
        <h2 className="fs-1 fw-semibold text-white">Private Nursing</h2>
      </div>
      <ServicePage_list />
      <ServicePage_details />
    </>
  );
};

export default PrivateNursing;
