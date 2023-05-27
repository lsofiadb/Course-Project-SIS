import React from "react";
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import ProductCard from "./ProductCard";
import Hamburger from "../IMGs/Hamburger.jpg";
import "../CSS/BodyProducts.css";

function BodyProducts({setCart, Cart}) {

  const { id: idRestaurante } = useParams();
  const [Products, setProducts] = useState([]);


  useEffect(() => {
    GET_Products();
  }, [])



  const GET_Products = async () => {
    const response = await fetch('http://localhost:1337/api/products/?populate[name][populate]=*&populate[description][populate]=*&populate[image][populate]=*&populate[category][populate]=*&populate[menu][populate]=*&populate[ingredients][populate]=*&populate[size][populate]=*&populate[restaurant][populate]=*');;
    const { data } = await response.json();
    // console.log(data);

    let productosFiltrados = data.filter(item => item.attributes.restaurant.data.id == idRestaurante)
    setProducts(productosFiltrados);
  }



  // Según el ID de un restaurante devuelve sus menus
  // const [Menu, setMenu] = useState([]);
  // const [infoRestaurant, setInfoRestaurant] = useState([]);

  // useEffect(() => {
  //   GET_Menu();
  // }, [])

  // function getFilteredByKey(array, key, value) {
  //   return array.filter(function (e) {
  //     return e[key] == value;
  //   });
  // }

  // const GET_Menu = async () => {
  //   const response = await fetch('http://localhost:1337/api/restaurants/?populate[name][populate]=*&populate[location][populate]=*&populate[category][populate]=*&populate[image][populate]=*&populate[schedule][populate]=*&populate[menus][populate]=*');;
  //   const { data } = await response.json();


  //   let menuFilter = getFilteredByKey(data, 'id', idRestaurante);

  //   setInfoRestaurant(menuFilter[0].attributes);
  //   setMenu(menuFilter[0].attributes.menus.data);

  //   console.log(menuFilter[0]);
  // }



  return (
    <div className="ProductsContainer">
      <h1>¡encuentra tu opción ideal!</h1>
      <div className="ProductsList">

        {
          Products.map((productItem, index) => {
            return (
              <>
                <ProductCard
                  key={index}
                  Photo={'http://localhost:1337' + productItem.attributes.image.data.attributes.url}
                  Name={productItem.attributes.name}
                  Price={10000}
                  Restaurant={productItem.attributes.restaurant.data.attributes.name}
                  setCart={setCart}
                  Cart={Cart}
                />

              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default BodyProducts;
