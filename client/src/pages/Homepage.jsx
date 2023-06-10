import React from 'react'
import './homepage.css'
import { NavLink } from 'react-router-dom'

function Homepage() {
  return (
    <div className='homepage'>
      <div className="content">
        <span className='text-t1'>Shop Everyday..!!</span>
        <span className='text-t2'>We sell 10M variety of products on most discounted price</span>
        <NavLink className='button' to='/products'>
          <button type='button'>SHOP NOW</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Homepage