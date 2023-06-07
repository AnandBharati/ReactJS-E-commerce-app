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
    <div>
      <h1>id - {item[0].id}</h1>
      <h1>name - {item[0].name}</h1>
    </div>

  )
}

export default ViewProduct