import React from 'react';
import './ShoppingCart.css'

import Navbar from '../../Components/Navbar';
import PrincipalImage from '../../Components/PrincipalImage';
import RateBar from '../../Components/RateBar';
import ShoppingItem from '../../Components/ShoppingItem';
import FooterBar from '../../Components/FooterBar';

export default function ShoppingCart() {
  return (
    <>
      <Navbar />
      <PrincipalImage Text={"Carrito de compras"} />
      <RateBar />
      <section className='ShoppingContainer'>
        <h1>Tu pedido</h1>
        <article className='ShoppingItems'>
          {/* TODO: Mapear los items del carrito aquí */}
          <ShoppingItem
            Photo={'IMAGEN'}
            Name={'Nombre item'}
            Restaurant={'Nombre restaurante'}
            Price={'$1000'} />
          <ShoppingItem
            Photo={'IMAGEN'}
            Name={'Nombre item'}
            Restaurant={'Nombre restaurante'}
            Price={'$1000'} />
          <ShoppingItem
            Photo={'IMAGEN'}
            Name={'Nombre item'}
            Restaurant={'Nombre restaurante'}
            Price={'$1000'} />
        </article>
      </section>
      <FooterBar />
    </>
  )
}
