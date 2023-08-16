import React from 'react'

function MenuItem({ name, toppings, price, image}) {
  return (
    <div className='menuItem'>
        <div></div>
        <h1> {name} </h1>
        <p> {toppings} </p>
        <p> {price} </p>
        <div style={{backgroundImage: `url(${image})`}}></div>        
        
    </div>
  )
}

export default MenuItem