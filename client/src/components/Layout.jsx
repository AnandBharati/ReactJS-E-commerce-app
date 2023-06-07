import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MainPage from './MainPage'

function Layout() {
  return (
    <div className='layoutContainer' style={{display: 'flex', flexDirection: 'column'}}>
        <NavBar/>
        <MainPage />
        <Footer/>
    </div>
  )
}

export default Layout