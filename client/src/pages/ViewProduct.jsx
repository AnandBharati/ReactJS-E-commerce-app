import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import './ViewProduct.css'
import { CART } from '../ContextApi/CartProvider'


function ViewProduct() {
  const params = useParams()
  const id = parseInt(params.id)
  const { products } = PRODUCTS()
  const { cart, addToCart, IncQty, DecQty } = CART()
  const [cartDetail, setCartDetail] = useState(cart.filter((p) => p?.id === id))
  const [item, setItem] = useState(products.find(prod => prod.id == id))

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setItem(products.find(prod => prod.id == id))
  }, [products])

  useEffect(() => {
    setCartDetail(cart.filter((p) => p?.id === id))
  }, [cart])

  return (
    <>
      <div className='view-product'>
        <img src={item?.image ?? "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"} alt="product image" />
        <div className="product-detail">
          <h2>{item?.id}</h2>
          <p>name - {item?.name}</p>
          <p>desc - {item?.desc}</p>
          <p>Seller - {item?.seller}</p>
          <p>Manifactured By - {item?.manifacturedBy}</p>
          <h3>Price: ₹{item?.price.toLocaleString()}</h3>

          {cartDetail.length > 0 ?
            <div className="btns" style={{ display: 'flex' }}>
              <button onClick={() => DecQty(id)}>-</button>
              <input type="text" readOnly value={cartDetail[0].qty} />
              <button onClick={() => IncQty(id)}>+</button>
            </div>
            :
            <button className='btnAddtocart' type='button' onClick={() => { addToCart(id) }}>add to Cart</button>
          }
        </div>
      </div>
      <NavLink to="/products">{'<< back to product page'}</NavLink>
    </>


  )
}

export default ViewProduct