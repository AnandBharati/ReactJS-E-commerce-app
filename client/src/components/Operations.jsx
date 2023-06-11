import React, { useState } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider';

function Operations() {
    const [keyword, setKeyword] = useState('');
    const {products, setProducts, fetchProducts} = PRODUCTS()
    
    const searchHandler = ()=>{
        fetch('http://localhost:2000/product/search/'+keyword)
        .then((res)=> res.json())
        .then((result)=> setProducts(result))
    }

  return (
    <div className='operation-container'>
        <input type="text" name="search" id="search" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
        <button type='button' onClick={searchHandler}>Search</button>
        <button type='button' onClick={fetchProducts}>back to all Products</button>
    </div>
  )
}

export default Operations