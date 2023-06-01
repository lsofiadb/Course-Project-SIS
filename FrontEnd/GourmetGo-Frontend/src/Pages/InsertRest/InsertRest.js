import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import FooterBar from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';
import BodyInsertRest from "../../Components/BodyInsertRest";
import PrincipalImage from "../../Components/PrincipalImage"

function InsertRest() {

  return (
    <>
      <Navbar options={options} />
      <PrincipalImage Text={"Insertar Restaurante"} />
      <BodyInsertRest />
      <FooterBar />
    </>
  );
}

export default InsertRest;
