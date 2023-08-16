import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Photo from '../assets/brenan-greene-HPZs4EXRFSU-unsplash.jpg'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';


function Home() {
  return (
        <div className="home" style={{ backgroundImage: `url(${Photo})` }}>
        <div className='header-container'>
            <h1>Pete's Za</h1>
            <h3>Hey there, pizza enthusiasts! Get ready to dive into the world of 
                flavor-packed goodness with Pete's Za, your go-to pizza haven since 
                2023. We're all about serving up pies that not only hit the spot but 
                also leave you craving more. <br></br><br></br>Our secret? Top-notch ingredients that 
                make every slice an explosion of taste. From the cheesiest cheeses 
                to the freshest veggies and meats, we're all about keeping it real. 
                Whether you're a Margherita fan or a meat lover through and through, 
                our menu has something for everyone. So, why wait? Join the Pete's Za 
                party and experience pizza bliss like never before. Go ahead, place 
                your order, and let the yumminess come to you!</h3>
            <Link to='/menu'>
            <button>Order Now <LocalPizzaIcon /></button>
            </Link>
        </div>
    </div>
  )
}

export default Home