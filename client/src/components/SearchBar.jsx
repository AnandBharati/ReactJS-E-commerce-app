import React, { useState } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider';
import apiUrl from '../helpers/API_URL';
import { BsArrowRightCircle } from 'react-icons/bs'
import './searchbar.css'

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const { searchProduct } = PRODUCTS()

  const searchHandler = () => {
    keyword && searchProduct(keyword)
  }

  return (
    <div className='search-container'>
      <input type="text" name="search" id="search" value={keyword} placeholder='Search..' onChange={(e) => setKeyword(e.target.value)} />
      <button type='button' onClick={searchHandler}>
        <BsArrowRightCircle style={{ fontSize: '1.5rem', color: 'white', padding: 0, margin: 0 }} />
      </button>
    </div>
  )
}

export default SearchBar