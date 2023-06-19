import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import apiUrl from '../helpers/API_URL'
import { useNavigate } from 'react-router-dom';


export function PRODUCTS() {
    const productContext = useContext(ProductContext);
    return productContext;
}

function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        fetchProducts(0, 30)
    }, [])

    function fetchProducts(skip=0, limit=30) {
        fetch(`http://localhost:2000/product/?skip=${skip}&limit=${limit}`)
            .then((res) => res.json())
            .then((json) => {
                setProducts(json.data);
                setTotalPages(json.totalpages);
            });
    }

    function fetchAllProducts() {
        fetch(`${apiUrl}/product/all`)
            .then((res) => res.json())
            .then((result) => setProducts(result))
    }

    function addProduct(item) {
        setProducts([...products, item]);
        fetch(`${apiUrl}/product/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        }).then((res) => res.json())
            .then((result) => console.log(result))
            .catch((error) => console.log('error which fetch operation', error))
    }

    function searchProduct(keyword) {
        if (keyword) {
            fetch(`${apiUrl}/product/search/` + keyword)
                .then((res) => res.json())
                .then((result) => {
                    console.log({ result })
                    setSearchResults(result);
                    //redirect to search page
                    navigate('/search');
                })
                .catch((error) => {
                    alert('something when wrong please try later')
                })
        }
    }

    return (
        <ProductContext.Provider value={{ products, searchResult, totalPages, setProducts, addProduct, fetchProducts, searchProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider