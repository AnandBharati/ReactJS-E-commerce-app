import React, { useEffect, useRef, useState } from 'react'
import { PRODUCTS } from '../ContextApi/ProductProvider'
import './addnewproduct.css'
import { BsUpload } from "react-icons/bs";

function AddNewProduct() {
  const { products, addProduct } = PRODUCTS();
  const [item, setItem] = useState({
    name: '',
    desc: '',
    image: '',
    price: 0,
    category: '',
    subcategory: '',
  });
  //checking max id and increasing by 1
  const [id, setId] = useState(products.reduce((prev, now) => prev < now.id ? now.id : prev, 0) + 1)

  const submitHandler = e => {
    e.preventDefault();
    addProduct(item)
    setId(id + 1)
    // setItem({})
  }

  const changeHandler = e => {
    e.preventDefault();
    if (e.target.name === 'image-file') {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener('load', (readerEvent) => {
        setItem({ ...item, id, 'image': readerEvent.target.result })
      })
    }
    else if (e.target.name === 'image-url')
      setItem({ ...item, id, 'image': e.target.value })
    else setItem({ ...item, id, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
    console.log(products)
  }, [products])


  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <h3>ID : {id}</h3>
      <fieldset>
        <legend>Basic</legend>
        <input type='text'
          name="name"
          value={item.name}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter product name'
        />
        <input type='text'
          name="description"
          value={item.description}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter description'
        />
        <input type='number'
          name="price"
          value={item.price}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter price'
        />

        <select name="category" value={item.category}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter category' required
          defaultValue={""}>
          <option value="" ></option>
          <option value="electronic">Electronix</option>
          <option value="vehicle">Vehicle</option>
          <option value="grocery">Grocery</option>
        </select>
        <input type='text'
          name="subcategory"
          value={item.subcategory}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter sub category'
        />

        <label htmlFor='image' style={{ border: '2px solid #d5d5d5', color: 'black', lineHeight: '25px' }}>
          Upload Image {<BsUpload style={{ color: 'black' }} />}
          {item?.image && <img src={item?.image} height={200} width={350} />}
        </label>
        <input type="file"
          name="image-file"
          id='image'
          onChange={(e) => changeHandler(e)}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <input type="text" name='image-url' value={item.image} onChange={(e)=> changeHandler(e)} placeholder='image URL' />
      </fieldset>

      <fieldset>
        <legend>Other informations</legend>
        <input type='text'
          name="seller"
          value={item.seller}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter seller name'
        />

        <input type='text'
          name="manifacturedBy"
          value={item.manifacturedBy}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter manifacturer name'
        />

        <input type='date'
          name="manifacturedOn"
          value={item.manifacturedOn}
          onChange={(e) => changeHandler(e)}
          placeholder='Enter manifacturer date'
        />
      </fieldset>

      <input type="submit" value="save" />

    </form>

  )
}

export default AddNewProduct