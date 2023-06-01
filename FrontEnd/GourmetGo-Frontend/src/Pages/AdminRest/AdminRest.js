import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import FooterBar from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';
import BodyAdminRest from "../../Components/BodyAdminRest";
import PrincipalImage from "../../Components/PrincipalImage"

function AdminRest() {
  

  return (
    <>
      
      <Navbar options={options} />
      <PrincipalImage Text={"Administrar Restaurantes"} />
      <BodyAdminRest />
      <FooterBar />
    </>
  );
}

export default AdminRest;
