import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const experience = () => {
  return (
    <section id='experience'>
    <h5>Minhas habilidades</h5>
    <h2>As skills que eu domino:</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>ReactJS</h4>
                <small className='text-alight'>Intermediário</small>
                </div>
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Vue</h4>
                <small className=' text-alight'>Avançado</small>
                </div>
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className=' text-alight'>Avançado</small>
              </div>
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML5</h4>
                <small className=' text-alight'>Avançado</small>
              </div>
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS3</h4>
                <small className=' text-alight'>Avançado</small>
              </div>
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Quasar</h4>
                <small className=' text-alight'>Iniciante</small>
              </div>
                </article>
          </div>
        </div>

        <div className="experience__plus">
          <h3>Habilidades Extra</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>GitHub</h4>
                <small className=' text-alight'>Iniciante</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className=' text-alight'>Iniciante</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className=' text-alight'>Iniciante</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Adobe XD</h4>
                <small className=' text-alight'>Avançado</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Office365</h4>
                <small className=' text-alight'>Avançado</small>
              </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  )
}

export default experience