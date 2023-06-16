import React, { useEffect } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import './products.css'
import SingleProduct from '../components/SingleProduct';
import Operations from '../components/Operations'

function Products() {
  const { products } = PRODUCTS();

  return (
    <div className='product-container'>
       <Operations />
      <div className="cards">
        {products.map((prod) =>
          <SingleProduct key={prod.id} ProdId={prod.id} />
        )}
      </div>
    </div >
  )
}

export default Products