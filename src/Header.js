import React from 'react'
import logo from '../src/logo.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Header() {
    const style = {
        logo:{
            width:"160px"
        }
    }
    return (
        <header className='py-3 bg-dark text-white'>
            <Router>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <img src={logo} style={style.logo}  />
                    <Link to='/' className='nav-link d-block px-3'>Home</Link>
                    <Link href='' className='nav-link d-block px-3'>About</Link>
                    <Link href='' className='nav-link d-block px-3'>Services</Link>
                    <Link href='' className='nav-link d-block px-3'>Blog</Link>
                    <Link href='' className='nav-link d-block px-3'>Contact US</Link>
                    <Link href='' className='nav-link d-block px-3'>Support</Link>
                </div>
            </div>
            </Router>
        </header>
    )
}
