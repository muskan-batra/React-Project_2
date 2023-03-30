import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer' >
            <h1> Pizza Express </h1>
            < br/>
            <p>Pizza TO FIT ANY TASTE</p>
            <Link to = "/menu" >
                <button> Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home