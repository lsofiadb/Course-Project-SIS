import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import FooterBar from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';
import BodyAdminProd from "../../Components/BodyAdminProd";
import PrincipalImage from "../../Components/PrincipalImage"

function AdminProd() {

  return (
    <>
      <Navbar options={options} />
      <PrincipalImage Text={"Administrar Productos"} />
      <BodyAdminProd />
      <FooterBar />
    </>
  );
}

export default AdminProd;
