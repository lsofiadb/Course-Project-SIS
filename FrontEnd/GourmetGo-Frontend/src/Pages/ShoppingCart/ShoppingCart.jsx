import React from 'react';
import './ShoppingCart.css'

import Navbar from '../../Components/Navbar';
import PrincipalImage from '../../Components/PrincipalImage';
import RateBar from '../../Components/RateBar';
import ShoppingItem from '../../Components/ShoppingItem';
import FooterBar from '../../Components/FooterBar';

export default function ShoppingCart({ Cart }) {
  return (
    <>
      <Navbar />
      <PrincipalImage Text={"Carrito de compras"} />
      <RateBar />
      <section className='ShoppingContainer'>
        <h1>Tu pedido</h1>
        <article className='ShoppingItems'>
          {/* TODO: Descomentar cuando todas las vistas esten ancladas */
            
            // !Cart ? 'No hay productos en el carrito' :  (Cart.map((item, index) => {
            //   return (
            //     <>
            //       <ShoppingItem
            //         Photo={item.Photo}
            //         Name={item.Name}
            //         Restaurant={item.Restaurant}
            //         Price={item.Price} />
            //     </>
            //   )
            // }))

          }
          <ShoppingItem
            Photo={'http://localhost:1337/uploads/product8_c7616b31b7.jpg'}
            Name={'Coctel de maracuyá y gin'}
            Restaurant={'Andrés Carne de Res'}
            Price={'$1000'} />
          <ShoppingItem
            Photo={'http://localhost:1337/uploads/product8_c7616b31b7.jpg'}
            Name={'Coctel de maracuyá y gin'}
            Restaurant={'Andrés Carne de Res'}
            Price={'$1000'} />
          <ShoppingItem
            Photo={'http://localhost:1337/uploads/product8_c7616b31b7.jpg'}
            Name={'Coctel de maracuyá y gin'}
            Restaurant={'Andrés Carne de Res'}
            Price={'$1000'} />
        </article>
        <div className='ShoppingFooter'>
          <button className='btnComprar'>Comprar</button>
        </div>
      </section>
      <FooterBar />
    </>
  )
}
