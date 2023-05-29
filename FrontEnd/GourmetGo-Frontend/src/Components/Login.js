import React, { useState } from "react";
import "../CSS/Login.css";
import Swal from "sweetalert2";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

 function Login() {
  

  return (
    <div className="containerGeneralLogin">
      <div className="ContainerFormLogin">
        <div className="ImageLogin">
        <img src="" />
        </div>
        <div className="FormLoginDisplay">
      <h1 className="FormHeader">Inicia sesión</h1>
      <form className="formLogin" >
      <h1 className="FormLabel">Correo electronico</h1>
        <input
          className="login-input"
          type="text"
          name="identifier"
          
        />
        <h1 className="FormLabel">Contraseña</h1>
        <input
          className="login-input"
          type="password"
          name="password"
          
        />
        <button className="login-boton">Ingresar</button>
        <Link className="RegisterText" >¿No tienes cuenta aún?</Link>
      </form>
      </div>
      </div>
    </div>
 
  );
}

export default Login;