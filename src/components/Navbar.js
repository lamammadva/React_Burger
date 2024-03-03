import  React from 'react';
import  Burgerimage from '../assets/download.png';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar1div'>
        <div className='navbar2div'> 
            <img src={Burgerimage}/>
            <div className='navbarlink'>
                <Link to="/">Ana sayfa</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/contact">İletişim</Link>
            </div>
        </div>
    </div>
  )
}
