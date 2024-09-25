import React from 'react'
import './Services.css'
import { addToCart } from '../../features/Slice'
import { useDispatch } from 'react-redux'

const Services = () => {
  const serv =[
    {
      image: "/neoEye.jpeg",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/neoSul.jpeg",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/neo.jpeg",
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
      image: "/aben.jpeg",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
    {
      image: "/abenda.jpeg",
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
      image: "/neo.jpeg",
      decrip1: "Neocell Suoer Collagen",
      decrip2: "+c6,000mg Type1",
      price: "16,999"
    },
  ]
  const dispatch = useDispatch()
  return (
    <div className='serviceBody'>
      <h2>Services</h2>
      <section className='serviceWrap'>

        {serv.map((item, index)=>(
          <article key={index} className='serviceCon'>
          <div className='serviceImg'>
            <img src={item.image} alt="" />
          </div>
          <p>{item.decrip1} <br />{item.decrip2}</p>
          <h3>${item.price}</h3>
          <button onClick={()=> dispatch(addToCart())}>Add</button>
        </article>
        ))}

      </section>
      <button>View More</button>
    </div>
  )
}

export default Services
