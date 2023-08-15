import React from 'react'
import pizzas from '../assets/brenan-greene-HPZs4EXRFSU-unsplash.jpg'

function About() {
  return (
    <div className='about'>
        <h1>About Pete's Za</h1>
        <div className='aboutTop' style={{ backgroundImage: `url(${pizzas})`}}>
        <h2>Pete's Za was established in 2023 </h2>
        <h3>Pete grew up on a pizza farm and made his very first pizza at just 3 years old. Ever since then, it's been his dream to make online pizzas so everyone can enjoy!</h3>
        </div>
            <div className='aboutBottom'>

            
        </div>
    </div>
  )
}

export default About