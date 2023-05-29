import React from "react";
import Logo from '../IMGs/Logo.png'
import '../CSS/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar_Container">
      <img src={Logo} className="Logo"/>
      <div className="Options_Navbar">
        <a className="TextOptions"  href="/Restaurants">Restaurantes</a>
        <a className="TextOptions"  href="/Login">Menú</a>
        <a className="TextOptions"  href="#">Productos</a>
      </div>
      <div className="LoginButton">
        <a className="LoginText" href="/Login">Login</a>
    </div>
    </div>
  );
}

export default Navbar;
