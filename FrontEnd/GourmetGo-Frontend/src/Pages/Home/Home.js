import React from "react";
import Navbar from "../../Components/Navbar";
import PrincipalImage from "../../Components/PrincipalImage";
import RateBar from "../../Components/RateBar";
import BodyHome from "../../Components/BodyHome";
import FooterBar from "../../Components/FooterBar";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <PrincipalImage Text={"lorem ipsum dolor sit"} />
      <RateBar />
      <BodyHome />
      <FooterBar />
    </div>
  );
}

export default Home;
