import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AddNewProduct from './pages/AddNewProduct'
import ViewProduct from './pages/ViewProduct'
import Products from './pages/Products'

import Layout from './components/Layout'
import ImageDisplay from './pages/ImageDisplay'
import ViewCart from './pages/ViewCart'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import { PRODUCTS } from './ContextApi/ProductProvider'
import SearchPage from './pages/SearchPage'
import Profile from './pages/Profile'
import Account from './pages/Account'

function App() {
  const { fetchProducts } = PRODUCTS();

  // useEffect(() => {
  //   fetchProducts(0, 30)
  // }, [])

  return (
    <>
      {/* <div className="mainContainer"> */}
      <Box>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            {/* <Route index element={<Products />} /> */}
            <Route path='products' element={<Products />} />
            <Route path='search/:keyword' element={<SearchPage />} />
            <Route path='addnewproduct' element={<AddNewProduct />} />
            <Route path='viewproduct/:id' element={<ViewProduct />} />
            <Route path='viewImage' element={<ImageDisplay />} />
            <Route path='viewCart' element={<ViewCart />} />
          </Route>
          <Route path='/user'>
            <Route path='profile' element={<Profile />} />
            <Route path='account' element={<Account />} />
          </Route>
        </Routes>
      </Box>
      {/* </div> */}
    </>
  )
}

export default App
