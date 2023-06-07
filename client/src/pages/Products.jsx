import React, { useEffect } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import './products.css'
import SingleProduct from '../components/SingleProduct';

function Products() {
  const { products } = PRODUCTS();

  return (
    <div>
      <div className="cards">
        {products.map((prod) =>
          <SingleProduct key={prod.id} ProdId={prod.id} />
        )}
      </div>
    </div >
  )
}

export default Products