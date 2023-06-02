import React from "react";
import { Link } from "react-router-dom";
import Logo from '../IMGs/Logo.png'
import '../CSS/Navbar.css'


function Navbar( props) {
  const options=props.options;

  return (
    <div className="Navbar_Container">
      <a href="/">
      <img src={Logo} className="Logo"/>
      </a>
      <div className="Options_Navbar">
        
        {
          Array.isArray(options)&&
          options.map((option)=>{
            return(
              <Link to={option.href}>
                <a className="TextOptions">{option.name}</a>
                {/* <a className="TextOptions"   href={option.href}>{option.name}</a> */}
              </Link>
            )
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
