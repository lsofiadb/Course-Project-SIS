import React from "react";
import Navbar from "../../Components/Navbar";
import Login from "../../Components/Login"
import FooterBar from "../../Components/FooterBar";

function LoginHome() {
  return (
    <>
      <Navbar />
      <Login/>
      <FooterBar />
    </>
  );
}

export default LoginHome;
