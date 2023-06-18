import React from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import ProductCard from '../components/ProductCard';
import './searchpage.css'

function SearchPage() {
    const { searchResult } = PRODUCTS();
    console.log({searchResult})

    if (searchResult.length === 0) {
        return <h1>Sorry we do not found any item</h1>
    }

    else {
        // { id, name, desc, price, image }
        return <div className='search-page'>
            {searchResult.map(item => {
                const { id, name, desc, price, image } = item;
                return <ProductCard key={id} data={{ id, name, desc, price, image }} />
            }
            )}
        </div>
    }
}


export default SearchPage