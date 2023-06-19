import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import './products.css'
import SingleProduct from '../components/SingleProduct';
import SearchBar from '../components/SearchBar';
import { Box } from '@mui/material';

function Products() {
  const { products, fetchProducts, totalPages } = PRODUCTS();
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    fetchNextPage();
    window.scrollTo(0, 0);
  }, [currPage])

  function fetchNextPage() {
    currPage <= totalPages && fetchProducts(currPage);
  }

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
          padding: 1,
          background: 'transparent'
        }}>
        <SearchBar />
      </Box>

      <div className='product-container'>
        <div className="cards">
          {products.map((prod) =>
            <SingleProduct key={prod.id} ProdId={prod.id} />
          )}
        </div>

        <div className="pagination">

        </div>

        <div className="pagination">
          <button type='button' onClick={() => currPage > 0 && setCurrPage(currPage - 1)} >Prev</button>
          {currPage - 3 > 0 && <button value={currPage - 3} onClick={(e) => setCurrPage(currPage - 3)}>{currPage - 3}</button>}
          {currPage - 2 > 0 && <button value={currPage - 2} onClick={(e) => setCurrPage(currPage - 2)}>{currPage - 2}</button>}
          {currPage - 1 > 0 && <button value={currPage - 1} onClick={(e) => setCurrPage(currPage - 1)}>{currPage - 1}</button>}
          {currPage > 0 && <button value={currPage} className='currpage'>{currPage}</button>}
          {currPage + 1 <= totalPages && <button value={currPage + 1} onClick={(e) => setCurrPage(currPage + 1)}>{currPage + 1}</button>}
          {currPage + 2 <= totalPages && <button value={currPage + 2} onClick={(e) => setCurrPage(currPage + 2)}>{currPage + 2}</button>}
          {currPage + 3 <= totalPages && <button value={currPage + 3} onClick={(e) => setCurrPage(currPage + 3)}>{currPage + 3}</button>}
          <button type='button' onClick={() => currPage > 0 && setCurrPage(currPage + 1)} >Next</button>
        </div>

      </div >
    </>
  )
}

export default Products