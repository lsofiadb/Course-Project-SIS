import React from "react";
import Logo from '../IMGs/Logo.png'
import '../CSS/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar_Container">
      <img src={Logo} className="Logo"/>
      <div className="Options_Navbar">
        <h1 className="TextOptions">Restaurantes</h1>
        <h1 className="TextOptions">Menú</h1>
        <h1 className="TextOptions">Productos</h1>
      </div>
      <div className="LoginButton">
        <h1 className="LoginText">Login</h1>
    </div>
    </div>
  );
}

export default Navbar;
