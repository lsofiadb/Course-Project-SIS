import React from "react";
import { CircleCheck } from 'tabler-icons-react';
import "../CSS/ProductCard.css"

function ProductCard ( {Photo, Name, Price, Restaurant} ) {
    return(
        <div className="ProductContainer">
            <img src={Photo} className="ProductPhoto"/>
            <div className="ProductDetails">
                <h1>{Name}</h1>
                <h1 id="Price">{Price}</h1>
                <h1>{Restaurant}</h1>
                <button className="OrderButton">
                    <div className="CheckDiv">
                    <CircleCheck size={20} color="#3d862d" />
                    </div>
                    Ordenar
                </button>
            </div>
        </div>
    );
}

export default ProductCard;