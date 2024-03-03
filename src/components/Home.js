import React from 'react';
import Homeimage from '../assets/burgerimages.jpeg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className='Homeimages'  style={{backgroundImage:`url(${Homeimage})`}}> 
      <div className='homebutton'>
        <Link to="/menu"><button>Siparis et</button></Link>
      </div>
    </div>
  )
}
