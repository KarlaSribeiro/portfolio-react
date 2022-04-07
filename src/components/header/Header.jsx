import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      < div className="container header__container">
        <div className="aboutme">
          <h5>Olá, meu nome é,</h5>
          <h1>Karla Ribeiro</h1>
          <h5 className="text-light">Sou Desenvolvedora Front-End.</h5>
          <CTA />
          <HeaderSocial />
        </div>
        

        <div className="me">
          <img src={ME} alt="me" align="left"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header