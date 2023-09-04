import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum ratione necessitatibus quod facere ab quas cupiditate ducimus magni. Ad quam officiis praesentium ipsam. Consequatur facilis autem modi doloribus, quibusdam non assumenda eveniet id soluta, ipsam eum amet excepturi laboriosam, sequi ipsa fugit. Alias eius aliquam necessitatibus maxime ex cum!</p>
        </div>
    </div>
  )
}

export default About;