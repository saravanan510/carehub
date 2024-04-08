import React from "react";
import HeroBanners from "../components/HeroBanners";
import ComperhensiveService from "../components/ComperhensiveService";
import Questions from "../components/Questions";
import Services from "../components/Services";
import Assistence from "../components/Assistence";
import Testimonial from "../components/Testimonial";
import Broucher from "../components/Broucher";

const Home = () => {
  return (
    <>
      <HeroBanners />
      <ComperhensiveService />
      <Questions />
      <Services />
      <Assistence />
      <Testimonial />
      <Broucher />
    </>
  );
};

export default Home;
