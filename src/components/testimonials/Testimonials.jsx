import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Carlos Henrique Mendes- Desenvolvedor Full Stack',
    review: 'Sempre muito esforçada, acompanho a evolução da minha irmã todos os dias, é muito responsável, inteligente e pró ativa, desejo muito sucesso e crescimento profissional pois sei que com a dedicação dela, ela consegue.'
  },
  {
    avatar: AVTR2,
    name: 'Victor - Desenvolvedor Full Stack',
    review: 'A Karla é uma profissional muito dedicada e prestativa, sempre disposta em aprender a ajudar ao próximo. Ótima pra trabalhar em equipe e responder dinamicas.'
  },
  {
    avatar: AVTR3,
    name: 'Samuel Barbosa - Desenvolvedor Front End',
    review: 'Tive a oportunidade de acompanhar de perto o desenvolvimento da Karla nos estudos de programação. Durante esse período pude notar a facilidade de aprender junto ao empenho e disciplina investidos nos estudos.'
  },
  {
    avatar: AVTR4,
    name: 'Gustavo Almeida - CEO & Co-founder - Menu Vip ',
    review: 'Karla mostrou muita competência, habilidade e conhecimento no desenvolvimento web com base nas demandas e necessidades que a Menu Vip tinha.'
  },
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Alguns amigos me ajudaram nesse momento, <p>escrevendo algo sobre mim...</p></h5>
      <h2>Depoimentos:</h2>
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
          <img src={avatar}/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials