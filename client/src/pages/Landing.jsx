import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Footer from "../components/modules/landing/Footer";
import Destinations from "../components/modules/landing/Destinations";
import Continents from "../components/modules/landing/Continents";
import About from "../components/modules/landing/About";
import Explore from "../components/modules/landing/Explore";
import Travel from "../components/modules/landing/Travel";
import Home from "../components/modules/landing/Home";
import Nav from "../components/modules/landing/Nav";
import "./landing.css";
import { useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function Landing() {
  const { state } = useLocation();
  // const {sub} = jwtDecode(localStorage.getItem("token"));
  // console.log(sub);
  return (
    <>
      <Box>
        <Nav />
        <Home rdFO={state?.redirectedFromOtp} />
        <Travel />
        <Explore />
        <About />
        <Continents />
        <Destinations />
        <Footer />
      </Box>
    </>
  );
}
