import React from "react";
import Navbar from "../../Components/Navbar";
import PrincipalImage from "../../Components/PrincipalImage";
import RateBar from "../../Components/RateBar";
import BodyRestaurants from "../../Components/BodyRestaurants";
import FooterBar from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';

function Restaurants() {
  
  return (
    <>
      <Navbar options={options} />
      <PrincipalImage Text={"restaurantes disponibles"} />
      <RateBar />
      <BodyRestaurants />
      <FooterBar />
    </>
  );
}

export default Restaurants;
