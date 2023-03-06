import React, {useState} from 'react'
import {Button, Nav,NavLink} from 'reactstrap';
import './NavbarStyles.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/CafeUpdateImages/CafeLogoSmall.jpg'


const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }


  return (
    <div className='header'>
        <div className='container'>
            <div className='nav-bar'>
                <Link to='/'>
                <img src={logo} alt='cafe-logo' width={90} />
                </Link>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li onClick={handleClick}>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <NavLink className='nav-link' to= '/menu'>Menu</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <Button>Order Now</Button>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    { click ? (
                        <FaTimes size={20} style={{color: "#305252"}}/>
                        ) : (
                    <FaBars size={20} style={{color: "#305252"}}/>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar