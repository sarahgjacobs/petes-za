import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className='header-container'>
            <h1>Pete's Za</h1>
            <h2>Est. 2023 Authentic Digital Pizza Delivered Immediately!</h2>
            <Link to='/menu'>
            <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home