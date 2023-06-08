import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'


export function PRODUCTS() {
    const productContext = useContext(ProductContext);
    return productContext;
}

function ProductProvider(props) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASEURL}/product/all`)
        .then((res)=>res.json())
        .then((result)=> setProducts(result))
    }, [])

    function addProduct(item) {
        setProducts([...products, item]);
        fetch(`${import.meta.env.VITE_BASEURL}/product/add`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        }).then((res)=>res.json())
        .then((result)=> console.log(result))
        .catch((error)=> console.log('error which fetch operation', error))
    }

    return (
        <ProductContext.Provider value={{ products, addProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider