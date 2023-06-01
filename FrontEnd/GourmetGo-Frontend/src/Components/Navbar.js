import React from "react";
import Logo from '../IMGs/Logo.png'
import '../CSS/Navbar.css'


function Navbar( props) {
  const options=props.options;

  return (
    <div className="Navbar_Container">
      <img src={Logo} className="Logo"/>
      <div className="Options_Navbar">
        
        {
          Array.isArray(options)&&
          options.map((option)=>{
            return(<a className="TextOptions"  href={option.href}>{option.name}</a>)
          })
        }
        
      </div>
      <div className="LoginButton">
        <a className="LoginText" href="/Login">Login</a>
    </div>
    </div>
  );
}

export default Navbar;
