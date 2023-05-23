import React from "react";
import Navbar from "../../Components/Navbar";
import PrincipalImage from "../../Components/PrincipalImage";
import RateBar from "../../Components/RateBar";
import BodyRestaurants from "../../Components/BodyRestaurants";
import FooterBar from "../../Components/FooterBar";

function Restaurants() {
  return (
    <>
      <Navbar />
      <PrincipalImage Text={"restaurantes disponibles"} />
      <RateBar />
      <BodyRestaurants />
      <FooterBar />
    </>
  );
}

export default Restaurants;
