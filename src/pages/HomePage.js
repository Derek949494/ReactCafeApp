import React from 'react'
import {Link}  from 'react-router-dom';
import BannerImage from '../assets/homepage1.jpeg';
import './HomePageStyles.css';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>Derek's Cafe</h1>
        <p>Tacoma's Best Coffee</p>
        <Link to='/menu'>
        <button> Menu</button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage