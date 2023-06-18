import React from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import ProductCard from '../components/ProductCard';
import './searchpage.css'
import { NavLink } from 'react-router-dom';

function SearchPage() {
    const { searchResult } = PRODUCTS();
    // console.log({ searchResult })

    if (searchResult.length === 0) {
        return <>
            <h1 style={{ textAlign: 'center' }}>Sorry..!! we do not found any item</h1>
            <NavLink to='/products'> {"<<"} Back to product page</NavLink>
        </>
    }

    else {
        // { id, name, desc, price, image }
        return <div className='search-page'>
            <div className="cards">
                {searchResult.map(item => {
                    const { id, name, desc, price, image } = item;
                    return <ProductCard key={id} data={{ id, name, desc, price, image }} />
                }
                )}
            </div>
            <NavLink to='/products'> {"<<"} Back to product page</NavLink>
        </div>
    }
}


export default SearchPage