import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='headerBody'>
      <article className='headerWrap'>
        <section className='headerLogo'>
          <img src="/pLogo.png" alt="" />
        </section>
        <nav className='navs'>
          <ul>
              <li>PRODUCTS</li>
              <li>SERVICES</li>
              <li>CONTACT US</li>
          </ul>
        </nav>
        <section className='cartLogo'>
          <img src='cart.png' alt=''/>
        </section>
      </article>
    </div>
  )
}

export default Header
