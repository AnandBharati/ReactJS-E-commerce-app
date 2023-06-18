import React from 'react'
import { NavLink } from 'react-router-dom';
import './productcard.css'
import { CART } from '../ContextApi/CartProvider';

function ProductCard({ data: { id, name, desc, price, image } }) {
    // const { id, name, desc, price, image } = SingleProduct;
    const { cart, addToCart, IncQty, DecQty } = CART();
    const cartDetail = cart.filter((p) => p?.id === id)

    return (
        <div className="product-card" >
            <NavLink to={"/viewproduct/" + id}>
                <img src={image} height={200} width={200} loading='lazy' />
                <div className="caption">

                    <div className="title">{name}</div>
                    <div className="desc">{desc}</div>
                    <div className="price"> <b>₹{price.toLocaleString()}</b></div>

                </div>
            </NavLink>
            <div className="buttons">
                {cartDetail.length > 0 ?
                    <div className="btns" style={{ display: 'flex' }}>
                        <button onClick={() => DecQty(id)}>-</button>
                        <input type="text" readOnly value={cartDetail[0].qty} />
                        <button onClick={() => IncQty(id)}>+</button>
                    </div>
                    :
                    <button className='btnAddtocart' onClick={(e) => { e.stopPropagation(); addToCart(id) }}>add to Cart</button>
                }
            </div>
        </div>
    )
}

export default ProductCard