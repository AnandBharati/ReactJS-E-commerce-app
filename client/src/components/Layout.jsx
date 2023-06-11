import React from 'react'
import NavBar from './NavBar-obsolete'
import Footer from './Footer'
import MainPage from './MainPage'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Box, Container } from '@mui/material'

function Layout() {
  return (
    <Box padding={0} margin={0} sx={{width: '100vw'}}>
        {/* <NavBar/> */}
        <ResponsiveAppBar/>       
        <MainPage />
        <Footer/>
    </Box>
  )
}

export default Layout