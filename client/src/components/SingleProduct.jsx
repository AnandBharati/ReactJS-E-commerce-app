import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import '../pages/products.css'
import { CART } from '../ContextApi/CartProvider';
import { NavLink } from 'react-router-dom';

function SingleProduct({ ProdId }) {
    const { products } = PRODUCTS();
    const { cart, addToCart, removeFromCart, IncQty, DecQty } = CART();
    const [SingleProduct, setSingleProduct] = useState(...products.filter(p => p.id === ProdId))
    const { id, name, desc,price, image } = SingleProduct;

    const cartDetail = cart.filter((p) => p?.id === ProdId)
    // useEffect(() => {
    //     setCartDetail(cart.filter((p) => p.id === ProdId))
    // }, [cartDetail.qty])

    // console.log(cart)
    return (
        <div className="card" >
            <img src={image} height={200} width={200} loading='lazy'/>
            <div className="caption">
                <NavLink to={"/viewproduct/" + id}>
                    <div className="name">{name}</div>
                    <div className="desc">{desc}</div>
                    <div className="price">$ {price}</div>
                </NavLink>
                {cartDetail.length > 0 ?
                    <div className="btns" style={{ display: 'flex' }}>
                        <button onClick={() => DecQty(ProdId)}>-</button>
                        <input type="text" readOnly value={cartDetail[0].qty} />
                        <button onClick={() => IncQty(ProdId)}>+</button>
                    </div>
                    :
                    <button className='btnAddtocart' onClick={(e) => { e.stopPropagation(); addToCart(id) }}>add to Cart</button>
                }
            </div>
        </div>
    )
}

export default SingleProduct