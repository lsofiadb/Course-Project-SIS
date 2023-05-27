import React from 'react'
import '../CSS/ShoppingItem.css'

export default function ShoppingItem({Photo, Name, Restaurant, Price}) {
  return (
    <section className='ItemContainer'>
      <img src={Photo} alt='ImgProduct'></img>
      <div>
        <h3>Item: <span>{Name}</span></h3>
        <h3>Restaurante: <span>{Restaurant}</span></h3>
      </div>

      <h3>Precio: <span>{Price}</span></h3>
    </section>
  )
}
