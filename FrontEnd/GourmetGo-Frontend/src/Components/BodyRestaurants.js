import React from "react";
import ResturantCard from "./RestaurantCard";
import Dominos from "../IMGs/DOMINOS.png";
import "../CSS/BodyRestaurants.css";

function BodyRestaurants() {
  return (
    <div className="RestaurantsContainer">
      <h1>¡encuentra tu opción ideal!</h1>
      <div className="RestaurantsList">
        <ResturantCard
          Photo={Dominos}
          Name={"Dominos Pizza"}
          QuantityProducts={15}
        />
        <ResturantCard
          Photo={Dominos}
          Name={"Dominos Pizza"}
          QuantityProducts={20}
        />
        <ResturantCard
          Photo={Dominos}
          Name={"Dominos Pizza"}
          QuantityProducts={5}
        />
        <ResturantCard
          Photo={Dominos}
          Name={"Dominos Pizza"}
          QuantityProducts={8}
        />
        <ResturantCard
          Photo={Dominos}
          Name={"Dominos Pizza"}
          QuantityProducts={10}
        />
        <ResturantCard
          Photo={Dominos}
          Name={"Dominos Pizza"}
          QuantityProducts={17}
        />
      </div>
    </div>
  );
}

export default BodyRestaurants;
