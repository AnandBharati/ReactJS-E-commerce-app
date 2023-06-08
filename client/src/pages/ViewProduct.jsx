import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../ContextApi/ProductProvider'


function ViewProduct() {
  const params = useParams()
  const { products } = PRODUCTS()
  const [item, setItem] = useState(products.filter(prod => prod.id == params.id))


  useEffect(() => {
    setItem(products.filter(prod => prod.id == params.id))
  }, [products])

  return (
    <div className='view-product'>
      <h2>{item.id}</h2>
      <img src={item.image} alt="product image" />

      <div className="product-detail">
        <p>name - {item[0].name}</p>
        <p>{item[0].desc}</p>
        <p>Seller - {item[0].seller}</p>
        <p>Manifactured By - {item[0].manifacturedBy}</p>
        <h3>{item.price}</h3>
      </div>
    </div>

  )
}

export default ViewProduct