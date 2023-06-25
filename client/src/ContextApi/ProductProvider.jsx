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
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    const [isProdLoading, setIsProdLoading] = useState(false);

    useEffect(() => {
        fetchProducts(0, 30);
    }, [])

    function fetchProducts(skip = 0, limit = 30) {
        setIsProdLoading(true)
        fetch(`${apiUrl}/product/?skip=${skip}&limit=${limit}`)
            .then((res) => res.json())
            .then((json) => {
                setProducts(json.data);
                setTotalPages(json.totalpages);
                setIsProdLoading(false);
            });
    }

    function fetchAllProducts() {
        setIsProdLoading(true)
        fetch(`${apiUrl}/product/all`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(result)
                setIsProdLoading(false)
            })
    }

    function addProduct(item) {
        setIsProdLoading(true)
        setProducts([...products, item]);
        fetch(`${apiUrl}/product/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        }).then((res) => res.json())
            .then((result) => {
                setIsProdLoading(false)
            })
            .catch((error) => console.log('error which fetch operation', error))
    }

    function searchProduct(keyword) {
        setIsProdLoading(true)
        if (keyword) {
            fetch(`${apiUrl}/product/search/` + keyword)
                .then((res) => res.json())
                .then((result) => {
                    console.log({ result })
                    setSearchResults(result);
                    //redirect to search page
                    setIsProdLoading(false)
                    navigate(`/search/${keyword}`);
                })
                .catch((error) => {
                    alert('something when wrong please try later')
                })
        }
    }

    function searchProductByCategory(keyword) {
        setIsProdLoading(true)
        fetch(`${apiUrl}/product/bycategory/${keyword}`)
            .then(res => res.json())
            .then(json => {
                setSearchResults(json.data);
                navigate(`/search/${keyword}`);
                setIsProdLoading(false)
            })
            .catch((err) => console.log(err));

    }

    return (
        <ProductContext.Provider value={{ products, searchResult, totalPages, isProdLoading, setProducts, addProduct, fetchProducts, searchProduct, searchProductByCategory }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider