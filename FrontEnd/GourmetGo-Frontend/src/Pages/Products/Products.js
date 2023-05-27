import React from "react";
import Navbar from "../../Components/Navbar";
import PrincipalImage from "../../Components/PrincipalImage";
import RateBar from "../../Components/RateBar";
import BodyProducts from "../../Components/BodyProducts";
import FooterBar  from "../../Components/FooterBar";

function Products ({setCart, Cart}) {
    return(
        <div>
        <Navbar />
        <PrincipalImage Text={"Productos disponibles"}/>
        <RateBar />
        <BodyProducts setCart={setCart} Cart={Cart}/>
        <FooterBar />
        </div>
    );
}

export default Products;