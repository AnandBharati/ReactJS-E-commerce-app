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

function App() {

  return (
    <>
      {/* <div className="mainContainer"> */}
      <Box>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* <Route index element={<Homepage />} /> */}
            <Route index element={<Products />} />
            <Route path='products' element={<Products />} />
            <Route path='addnewproduct' element={<AddNewProduct />} />
            <Route path='viewproduct/:id' element={<ViewProduct />} />
            <Route path='viewImage' element={<ImageDisplay />} />
            <Route path='viewCart' element={<ViewCart />} />
          </Route>
        </Routes>
      </Box>
      {/* </div> */}
    </>
  )
}

export default App
