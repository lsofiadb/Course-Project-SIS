import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import Login from "../../Components/Login"
import FooterBar from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';

function LoginHome() {
  

  return (
    <>
    
    <Navbar options={options} />
      <Login/>
      <FooterBar />
    </>
  );
}

export default LoginHome;
