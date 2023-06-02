import React, { useState } from "react";
import "../CSS/Login.css";
import Swal from "sweetalert2";
import LoginImage from "../IMGs/loginImage.jpg"
import { Routes, Route, useNavigate, Link } from "react-router-dom";

 function Login() {
  
  const navigate = useNavigate();
  const [user, setInput] = useState({
    identifier: "",
    password: "",
  });

  const handleLogin = (e) => {
    setInput({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendLogin = (e) => {
    e.preventDefault();
    sendLogin(user);
  };

  const navigateToRegister = (e) => {
    e.preventDefault()
    navigate("/register")
  }


  const sendLogin = async (user) => {
    try{
        const response = await fetch(`http://localhost:1337/api/auth/local`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log("AKIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        console.log("DATA JWT:"+data.jwt)
        console.log(data)
        console.log(user)
        if(data.jwt !=undefined){
         Swal.fire({
            title: "¡Login exitoso!",
            icon: "success",
            button: "Aww yiss!",
         });
            navigate('/', {state: {id: user.identifier}});
            // navigate('/Logged', {state: {id: data.user.id}});
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '¡Credenciales incorrectas!',
            })
          
          }
    
      }catch (error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      }
  return (
    <>
     <div className="containerGeneralLogin">
      <div className="ContainerFormLogin">
        <div className="ImageLogin">
        <img src={LoginImage} alt="imagen login"/>
        </div>
        <div className="FormLoginDisplay">
      <h1 className="FormHeader">Inicia sesión</h1>
      <form className="formLogin" onSubmit={handleSendLogin}>
      <h1 className="FormLabel">Correo electronico</h1>
        <input
          className="login-input"
          type="text"
          name="identifier"
          onChange={handleLogin}
        />
        <h1 className="FormLabel">Contraseña</h1>
        <input
          className="login-input"
          type="password"
          name="password"
          onChange={handleLogin}
        />
        <button className="login-boton">Ingresar</button>
      </form>
      </div>
      </div>
    </div>
    </>
   
 
  );
}

export default Login;