import React from 'react'
import { Outlet } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import './mainpage.css'
import { MODEL } from '../ContextApi/ModelProvider'

function MainPage() {
  const { isSignupOpen, setIsSignupOpen, isLoginOpen, setIsLoginOpen } = MODEL()
  return (
    <div className='mainpage'>
      {(isSignupOpen || isLoginOpen) &&
        <h1
          className='closeBtn'
          onClick={() => { setIsSignupOpen(false); setIsLoginOpen(false) }}
        >
          X
        </h1>}
      <Login />
      <Signup />
      <Outlet />
    </div>
  )
}

export default MainPage