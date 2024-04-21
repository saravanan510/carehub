import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollTop";
import { useMediaQuery } from "react-responsive";
import "animate.css/animate.css";
import Action from "./Action";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <Action />
    </>
  );
};

export default Layout;
