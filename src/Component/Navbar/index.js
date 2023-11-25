import React from 'react'
import {NavLink } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-logo'>
          <h2>Ultra Profile</h2>
                </div>
        <ul className='ul-list'>
        <li className='list-item'><NavLink to="/" >Home</NavLink></li>
        <li className='list-item'><anchor href='#'>Work</anchor></li>
        <li className='list-item'><anchor href='#'>Portfolio</anchor></li>
        <li className='list-item'><anchor href='#'>Resume</anchor></li>
        <li className='list-item'><anchor href='#'>About</anchor></li>
        <li className='list-item'><NavLink to="/Contact" >Contact</NavLink></li>
        </ul>
    </div>
    </div>
  )
}
