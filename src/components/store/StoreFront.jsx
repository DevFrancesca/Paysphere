import React from 'react'
import './StoreFront.css'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Product from '../products/Product'

const StoreFront = () => {
  return (
    <div className='mainBody'>
     <Header/>
     <Hero/>
     <Product/>
    </div>
  )
}

export default StoreFront
