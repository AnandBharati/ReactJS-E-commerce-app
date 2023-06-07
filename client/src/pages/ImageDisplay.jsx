import React from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'

function ImageDisplay() {
  const { products, addProduct } = PRODUCTS()

  return (
    <div>
      {
        products[0]?.image ?
          <img src={products[0]?.image} height={200} width={300} style={{objectFit: 'cover'}}/>
          :
          <label>no image selectd</label>
      }
    </div>
  )
}

export default ImageDisplay