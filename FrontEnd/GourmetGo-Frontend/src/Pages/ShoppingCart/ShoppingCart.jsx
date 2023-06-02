import React from 'react';
import './ShoppingCart.css'

import Navbar from '../../Components/Navbar';
import PrincipalImage from '../../Components/PrincipalImage';
import RateBar from '../../Components/RateBar';
import ShoppingItem from '../../Components/ShoppingItem';
import FooterBar from '../../Components/FooterBar';
import { options } from '../../Components/navbarOptions';
import Swal from "sweetalert2";

export default function ShoppingCart({ Cart }) {

  const handleBuyProduct = (e) => {
    e.preventDefault();
 
    Swal.fire({
        title: "¡Compra realizada!",
        icon: "success",
        button: "Aww yiss!",
     });
}

  return (
    <>
       <Navbar options={options} />
      <PrincipalImage Text={"Carrito de compras"} />
      <RateBar />
      <section className='ShoppingContainer'>
        <h1>Tu pedido</h1>
        <article className='ShoppingItems'>
          {/* TODO: Descomentar cuando todas las vistas esten ancladas */
            
             !Cart ? 'No hay productos en el carrito' :  (Cart.map((item, index) => {
             return (
                 <>
                   <ShoppingItem
                   
                     Photo={item.Photo}
                    Name={item.Name}
                     Restaurant={item.Restaurant}
                  Price={item.Price} />
                </>
              )
            }))

          }
          
        </article>
        <div className='ShoppingFooter'>
          <button className='btnComprar' onClick={handleBuyProduct}>Comprar</button>
        </div>
      </section>
      <FooterBar />
    </>
  )
}
