import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "tabler-icons-react";
import "../CSS/RestaurantCard.css";

function ResturantCard({ Photo, Name, QuantityProducts, id }) {
  const navigate = useNavigate();

  const handle_viewPet = (e) => {
    e.preventDefault();
    navigate(`/Products/${id}`);
  }


  return (
    <div className="RestaurantContainer">
      <img src={Photo} className="RestaurantPhoto" />
      <div className="RestaurantDetails">
        <h1 id="RestaurantName">{Name}</h1>
        <h1></h1>
        <h1 id="Quantity">Productos disponibles: {QuantityProducts}</h1>
        <button className="DetailsButton" onClick={handle_viewPet}>
          <div className="LookDiv">
            <Search size={20} color="#3d862d" />
          </div>
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default ResturantCard;
