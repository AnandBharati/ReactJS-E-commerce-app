import React from 'react'
import {Outlet} from 'react-router-dom'

function MainPage() {
  return (
    <div className='mainpage' style={{minHeight: 'calc(100vh - 200px)'}}> 
        <Outlet/>
    </div>
  )
}

export default MainPage