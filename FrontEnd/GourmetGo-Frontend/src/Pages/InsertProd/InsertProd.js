import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import FooterBar from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';
import BodyInsertProd from "../../Components/BodyInsertProd";
import PrincipalImage from "../../Components/PrincipalImage"

function InsertProd() {

  return (
    <>
      <Navbar options={options} />
      <PrincipalImage Text={"Insertar Productos"} />
      <BodyInsertProd />
      <FooterBar />
    </>
  );
}

export default InsertProd;
