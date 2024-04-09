import React from "react";
import HeroBanners from "../components/HeroBanners";
import ComperhensiveService from "../components/ComperhensiveService";

import Services from "../components/Services";
import Assistence from "../components/Assistence";
import Testimonial from "../components/Testimonial";
import Broucher from "../components/Broucher";
import Question2 from "../components/Questions2";

const Home = () => {
  return (
    <>
      <HeroBanners />
      <ComperhensiveService />
      <Services />
      <Assistence />
      <Testimonial />
      <Question2 />
      <Broucher />
    </>
  );
};

export default Home;
