import React from "react";
import { useEffect, useState } from 'react'

import ResturantCard from "./RestaurantCard";
import Dominos from "../IMGs/DOMINOS.png";
import "../CSS/BodyRestaurants.css";

function BodyRestaurants() {

  const [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    GET_Restaurants();
  }, [])


  const GET_Restaurants = async () => {
    const response = await fetch('http://localhost:1337/api/restaurants/?populate[name][populate]=*&populate[location][populate]=*&populate[category][populate]=*&populate[image][populate]=*&populate[schedule][populate]=*&populate[menus][populate]=*');;
    const { data } = await response.json();

    // console.log(data);

    setRestaurants(data);
  }


  return (
    <div className="RestaurantsContainer">
      <h1>¡encuentra tu opción ideal!</h1>
      <div className="RestaurantsList">

        {
          !Restaurants ? 'Cargando' :
            Restaurants.map((restaurant, index) => {
              return (
                <>
                  <ResturantCard
                    key={index}
                    Photo={'http://localhost:1337'+restaurant.attributes.image.data.attributes.url}
                    Name={restaurant.attributes.name}
                    QuantityProducts={restaurant.attributes.menus.data.length}
                    id ={restaurant.id}
                  />
                </>
              )
            })
        }
      </div>
    </div>
  );
}

export default BodyRestaurants;
