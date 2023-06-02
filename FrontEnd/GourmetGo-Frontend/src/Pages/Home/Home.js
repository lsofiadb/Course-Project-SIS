import React from "react";
import Navbar from "../../Components/Navbar";
import PrincipalImage from "../../Components/PrincipalImage";
import RateBar from "../../Components/RateBar";
import BodyHome from "../../Components/BodyHome";
import FooterBar from "../../Components/FooterBar";
import "./Home.css";
import { options } from '../../Components/navbarOptions';

function Home() {
  return (
    <div>
      <Navbar options={options} />
      <PrincipalImage Text={"¡Tu destino gastronómico!"} />
      <RateBar />
      <BodyHome />
      <FooterBar />
    </div>
  );
}

export default Home;
