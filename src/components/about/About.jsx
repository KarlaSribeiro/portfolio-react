import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
import {MdLocationOn} from 'react-icons/md'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {MdAirplanemodeActive} from 'react-icons/md'


const about = () => {
  return (
    <section id='about'>
      <h5>Um Pouco</h5>
      <h2>Sobre Mim...</h2>

      <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image" />
      </div>
      </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <MdLocationOn className='about__icon'/>
              <h5>Localização</h5>
              <small>Santos - São Paulo
                Brasil
              </small>
            </article>
 
            <article className='about__card'>
              <BsJournalBookmarkFill className='about__icon'/>
              <h5>Faculdade</h5>
              <small>
                ADS - Análise e Desenvolvimento de Sistemas
              </small>
            </article>

            <article className='about__card'>
              <MdAirplanemodeActive className='about__icon'/>
              <h5>Nacionalidades</h5>
              <small>
                Brasileira e Portuguesa
              </small>
            </article>
          </div>

            <p>
              Me chamo, Karla Ribeiro, tenho 29 anos e me descobri dentro da tecnologia através do meu irmão, 
              que me inspira cada dia a ser uma desenvolvedora melhor do que ontem.
              Atualmente trabalho em uma empresa de tecnologia, chamada: YBOH, sou Front-End developer de colocação Júnior, portanto, busco mais conhecimento para adquirir mais experiências e evoluir na minha área.
              <b> Sou otimista, auto-didata e dedicada.</b>
            </p>
          
          
            <a href="#contact" className='btn-boton'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default about