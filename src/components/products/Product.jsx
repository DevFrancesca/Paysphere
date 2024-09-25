import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/Slice'

const Product = () => {
  const items =[
    {
      image: "/item1.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/item2.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/heroImg.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/item4.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/item5.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/item1.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/item2.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/heroImg.png",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
  ]
  const dispatch = useDispatch()
  return (
    <div className='productBody'>
      <h2>Products</h2>
      <section className='productWrap'>

        {items.map((item, index)=>(
          <article key={index} className='productCon'>
          <div className='productImg'>
            <img src={item.image} alt="" />
          </div>
          <p>{item.decrip1} <br />{item.decrip2}</p>
          <h3>${item.price}</h3>
          <button onClick={()=> dispatch(addToCart())}>Add</button>
        </article>
        ))}

      </section>
    </div>
  )
}

export default Product
