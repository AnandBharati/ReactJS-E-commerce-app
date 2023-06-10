import React, { useContext, useEffect, useState } from 'react'
import { CardContext } from './CartContext'
import { PRODUCTS } from './ProductProvider';

export function CART() {
    const { cart, addToCart, removeFromCart, IncQty, DecQty } = useContext(CardContext)
    return { cart, addToCart, removeFromCart, IncQty, DecQty };
}

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const { products } = PRODUCTS();

    /*
    [{id, qty, name, desc, image}]
    */
    useEffect(() => {
        const localCartValue = localStorage.getItem('cart')
        localCartValue && setCart(JSON.parse(localCartValue));
        console.log(localCartValue)
        
    },[])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    function addToCart(ProdId) {
        //check if product already added
        if (!cart.includes(p => p.id === ProdId)) {
            const product = products.filter((prod) => prod.id === ProdId)
            if (product.length > 0) {
                const itemDetail = {
                    id: ProdId,
                    qty: 1,
                    name: product[0].name,
                    desc: product[0].desc,
                    image: product[0].image,
                    unitprice: typeof (product[0].price) === 'string' ? parseInt(product[0].price) : product[0].price,
                    totalprice: typeof (product[0].price) === 'string' ? parseInt(product[0].price) : product[0].price
                }
                setCart([...cart, itemDetail])
            }
        }
    }

    function removeFromCart(ProdId) {
        setCart(cart.filter((prod) => prod.id !== ProdId));
    }

    function IncQty(ProdId) {
        const newCartItems = cart.map((prod) => {
            if (prod.id === ProdId) {
                return {
                    ...prod,
                    qty: prod.qty + 1,
                    totalprice: prod.unitprice * (prod.qty + 1)
                }
            } else {
                return prod
            }
        });
        setCart(newCartItems);
    }

    function DecQty(ProdId) {
        const newCartItems = cart.map((prod) => {
            if (prod.id === ProdId) {
                if (prod.qty > 1) return {
                    ...prod,
                    qty: prod.qty - 1,
                    totalprice: prod.unitprice * (prod.qty - 1)
                }
                else if (prod.qty == 1)
                    return null
            } else {
                return prod
            }
        });
        setCart(newCartItems.filter(p => p !== null));
    }

    return (
        <CardContext.Provider value={{ cart, addToCart, removeFromCart, IncQty, DecQty }}>
            {children}
        </CardContext.Provider>
    )
}

export default CartProvider