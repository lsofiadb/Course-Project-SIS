import React from 'react'
import '../CSS/ShoppingItem.css'

export default function ShoppingItem({Photo, Name, Restaurant, Price}) {
  return (
    <section className='ItemContainer'>
      {/* ItemIndividual */}
      <p>{Photo}</p>
      <div>
        <h3>Item: {Name}</h3>
        <h3>Restaurante: {Restaurant}</h3>
      </div>

      <h3>Precio: {Price}</h3>
    </section>
  )
}
