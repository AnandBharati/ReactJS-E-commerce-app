import React from 'react'
import { CART } from '../ContextApi/CartProvider'
import './viewCart.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

function ViewCart() {
    const { cart, removeFromCart, IncQty, DecQty } = CART();

    if (cart.length === 0) {
        return <>
            <h2 style={{ color: 'grey' }}>
                <i>There is no item added to cart</i>
            </h2>
            <NavLink to="/products">{'<< back to product page'}</NavLink>
        </>
    } else {
        return (
            <div className='cartContainer'>
                <div className="items">
                    {cart.map(item =>
                        <div className="item" key={item.id}>
                            {item.image ?
                                <img src={item.image} alt="product image" />
                                :
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt="no image available" />}
                            <div className="productinfo">
                                <h4>product id : {item.id}</h4>
                                <p>name: {item.name} </p>
                                <p>desc: {item.desc} </p>
                                <div className="btns" style={{ display: 'flex', marginBottom: '10px' }}>
                                    <button onClick={() => DecQty(item.id)}>-</button>
                                    <input type="text" readOnly value={item.qty} />
                                    <button onClick={() => IncQty(item.id)}>+</button>
                                </div>
                                <p>unit price: ₹{item.unitprice.toLocaleString()} </p>
                                <b>total price: ₹{item.totalprice.toLocaleString()} </b>
                            </div>
                            <div className="remove" onClick={() => removeFromCart(item.id)}>
                                <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '25px' } }}>
                                    <RiDeleteBin5Fill />
                                </IconContext.Provider>
                            </div>
                        </div>
                    )}
                </div>

                <h1>Total: ₹{cart.reduce((prev, now) => prev + now.totalprice, 0).toLocaleString()}</h1>
                <button type='button'>Checkout</button>

            </div>
        )
    }
}

export default ViewCart