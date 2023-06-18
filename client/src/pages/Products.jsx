import React, { useEffect } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import './products.css'
import SingleProduct from '../components/SingleProduct';
import SearchBar from '../components/SearchBar';
import { Box } from '@mui/material';

function Products() {
  const { products } = PRODUCTS();

  return (
    <>
      {/* Search Feature */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignSelf: 'center',
          justifyContent: ' center',
          width: { xs: '100vw' },
          boxShadow: '10px 0 10px 0 #0002',
          padding: 1
        }}>
        <SearchBar />
      </Box>

      <div className='product-container'>
        <div className="cards">
          {products.map((prod) =>
            <SingleProduct key={prod.id} ProdId={prod.id} />
          )}
        </div>
      </div >
    </>
  )
}

export default Products