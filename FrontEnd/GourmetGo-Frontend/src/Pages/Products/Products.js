import React from "react";
import Navbar from "../../Components/Navbar";
import PrincipalImage from "../../Components/PrincipalImage";
import RateBar from "../../Components/RateBar";
import BodyProducts from "../../Components/BodyProducts";
import FooterBar  from "../../Components/FooterBar";
import { options } from '../../Components/navbarOptions';

function Products ({setCart, Cart}) {
    return(
        <div>
       <Navbar options={options} />
        <PrincipalImage Text={"Productos disponibles"}/>
        <RateBar />
        <BodyProducts setCart={setCart} Cart={Cart}/>
        <FooterBar />
        </div>
    );
}

export default Products;