import React from 'react'
import './services.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'


const data = [
{
  id: 1,
  image: IMG1,
  title:'Pokedex-Evolution ReactJS',
  github: 'https://github.com/KarlaSribeiro/pokedex-evolution-REACT',
  demo: 'https://github.com'
},
{
  id: 2,
  image: IMG2,
  title:'LandingPage Responsive',
  github: 'https://github.com/KarlaSribeiro/Landing-page-responsive',
  demo: 'https://github.com'
},
{
  id: 5,
  image: IMG5,
  title:'Clone-Starbucks',
  github: 'https://github.com/KarlaSribeiro/Clone-Starbucks',
  demo: 'https://github.com'
},
{
  id: 4,
  image: IMG4,
  title:'Calculo IMC',
  github: 'https://github.com/KarlaSribeiro/Calculo-de-IMC',
  demo: 'https://github.com'
}
]

const Services = () => {
  return (
    <section id='services'>
      <h5>Alguns dos meus</h5>
      <h2>Projetos Desenvolvidos:</h2>

      <div className="container service__container">
       {
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className='service__item'>
            <div className="service__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="service__item-cta">
              <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Services