import React from 'react'
import pizzas from '../assets/brenan-greene-HPZs4EXRFSU-unsplash.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <h1>About Pete's Za</h1>
        <div className='aboutTop' style={{ backgroundImage: `url(${pizzas})`}}>
        
        </div>
            <div className='aboutBottom'>
            <h2>Pete's Za: Where Flavor Meets Freshness in Every Bite </h2>
        <h3>Hey there, pizza enthusiasts! Let us spin you a tale about Pete – a 
            true farm-to-table champion turned pizza maestro. Born and raised on 
            a farm, Pete's love for fresh, lip-smacking goodness led him to 
            create Pete's Za in 2023. With a dash of that farm-fresh charm and a
             sprinkle of pizza magic, Pete's Za is here to serve you some seriously
              delicious slices. Every pizza tells a story of Pete's roots and his 
              commitment to top-notch ingredients. So, join us in savoring the taste 
              of quality, authenticity, and a sprinkle of Pete's passion in every bite.</h3>
            
        </div>
    </div>
  )
}

export default About