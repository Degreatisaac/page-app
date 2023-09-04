import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../assets/pizza.jpeg'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className="headerContainer" >
            <h1>Zeeco Pizzaria</h1>
            <a href='/menu'>PIZZA TO FIT ANY TASTE</a>
            <Link to='/menu'>
            <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;