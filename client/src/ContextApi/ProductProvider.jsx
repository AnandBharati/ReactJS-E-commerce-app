import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import apiUrl from '../helpers/API_URL'


export function PRODUCTS() {
    const productContext = useContext(ProductContext);
    return productContext;
}

function ProductProvider(props) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts()
    }, [])

    function fetchProducts(){
        fetch(`${apiUrl}/product/all`)
        .then((res)=>res.json())
        .then((result)=> setProducts(result))
    }

    function addProduct(item) {
        setProducts([...products, item]);
        fetch(`${apiUrl}/product/add`,{
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
        <ProductContext.Provider value={{ products, setProducts, addProduct, fetchProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider