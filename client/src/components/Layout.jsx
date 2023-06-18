import React from 'react'
import NavBar from './NavBar-obsolete'
import Footer from './Footer'
import MainPage from './MainPage'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Box, Container } from '@mui/material'
import SearchBar from './SearchBar'

function Layout() {
  return (
    <Box padding={0} margin={0} sx={{ width: '100vw' }}>
      {/* <NavBar/> */}
      <ResponsiveAppBar />
      {/* Search Feature */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignSelf: 'center',
          justifyContent:' center',
          width:{ xs: '100vw'},
          boxShadow: '10px 0 10px 0 #0002',
          padding: 1
        }}>
        <SearchBar />
      </Box>
      <MainPage />
      <Footer />
    </Box>
  )
}

export default Layout