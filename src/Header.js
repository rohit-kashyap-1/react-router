import React from 'react'
import logo from '../src/logo.png'
import { BrowserRouter as Router, Link} from 'react-router-dom';

export default function Header() {
    const style = {
        logo:{
            width:"160px"
        }
    }
    return (
        <header className='py-3 bg-dark text-white'>
           
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <img src={logo} style={style.logo}  />
                    <Link to='/' className='nav-link d-block px-3'>Home</Link>
                    <Link to='/about' className='nav-link d-block px-3'>About</Link>
                    <Link to='/services' className='nav-link d-block px-3'>Services</Link>
                    <Link to='/blog' className='nav-link d-block px-3'>Blog</Link>
                    <Link to='/contact' className='nav-link d-block px-3'>Contact US</Link>
                    <Link to='/support' className='nav-link d-block px-3'>Support</Link>
                </div>
            </div>
            
        </header>
    )
}
