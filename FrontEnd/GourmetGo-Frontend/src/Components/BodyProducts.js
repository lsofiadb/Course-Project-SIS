import React from "react";
import ProductCard from "./ProductCard";
import Hamburger from "../IMGs/Hamburger.jpg";
import "../CSS/BodyProducts.css";

function BodyProducts() {
  return (
    <div className="ProductsContainer">
      <h1>¡encuentra tu opción ideal!</h1>
      <div className="ProductsList">
        <ProductCard
          Photo={Hamburger}
          Name={"Producto"}
          Price={"$Precio"}
          Restaurant={"Restaurante"}
        />
        <ProductCard
          Photo={Hamburger}
          Name={"Producto"}
          Price={"$Precio"}
          Restaurant={"Restaurante"}
        />
        <ProductCard
          Photo={Hamburger}
          Name={"Producto"}
          Price={"$Precio"}
          Restaurant={"Restaurante"}
        />
        <ProductCard
          Photo={Hamburger}
          Name={"Producto"}
          Price={"$Precio"}
          Restaurant={"Restaurante"}
        />
        <ProductCard
          Photo={Hamburger}
          Name={"Producto"}
          Price={"$Precio"}
          Restaurant={"Restaurante"}
        />
        <ProductCard
          Photo={Hamburger}
          Name={"Producto"}
          Price={"$Precio"}
          Restaurant={"Restaurante"}
        />
      </div>
    </div>
  );
}

export default BodyProducts;
