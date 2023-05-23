import React from "react";
import "../CSS/RateBar.css";
import { ClockHour4 } from 'tabler-icons-react';
import { Stars } from 'tabler-icons-react';
import { TruckDelivery } from 'tabler-icons-react';


function RateBar() {
  return (
    <div className="RateBar-Container">
      <div className="RateContent">
      <ClockHour4 size={30} color="White"/>
        <h1 className="RateBarText">Envios en 30 minutos</h1>
      </div>
      <div className="RateContent">
      <Stars size={30} color="White"/>
        <h1 className="RateBarText">Califica nuestro servicio</h1>
      </div>
      <div className="RateContent">
      <TruckDelivery size={30} color="White"/>
        <h1 className="RateBarText">Servicio en toda Bogotá</h1>
      </div>
    </div>
  );
}

export default RateBar;
