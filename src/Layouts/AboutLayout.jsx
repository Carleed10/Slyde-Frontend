import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";

const AboutLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
};

export default AboutLayout;
