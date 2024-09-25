import React from 'react'
import './StoreFront.css'
// import Header from '../header/Header'
import Hero from '../hero/Hero'
import Product from '../products/Product'
import Services from '../services/Services'

const StoreFront = () => {
  return (
    <main className='mainBody'>
        <Hero/>
     <div id='products'>
        <Product />
      </div>
      <div id='services'>
        <Services/>
      </div>
      {/* <Services/> */}
    </main>
  )
}

export default StoreFront
