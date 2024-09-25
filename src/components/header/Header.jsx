import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector((state)=>state.cart.items)
  return (
    <div className='headerBody'>
      <article className='headerWrap'>
        <section className='headerLogo'>
          <img src="/pLogo.png" alt="" />
        </section>
        <nav className='navs'>
          <ul>
              <li> <a href="#products">PRODUCTS</a></li>
              <li> <a href="#services">SERVICES</a></li>
              <li>CONTACT US</li>
          </ul>
        </nav>
        <section className='cartLogo'>
          <img src='cart.png' alt=''/>
          <span className='cartCount'>{cartCount}</span>
        </section>
      </article>
    </div>
  )
}

export default Header
