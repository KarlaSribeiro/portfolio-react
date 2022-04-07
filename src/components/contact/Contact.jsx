import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import  {BiMessageDetail} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs, { send } from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vxbsnp', 'service_4vxbsnp', form.current, 'vmr_P6rCPLd-0T3mD')
    e.target.reset()
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText('karla-santosribeiro@hotmail.com');
  }


  return (
    <section id='contact'>
      <h5>Aguardo sua mensagem</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         <article className="contact__option">
           <MdOutlineMail className='contact__option-icon'/>
           <h4>E-mail</h4>
           <h5><a onClick={copyToClipboard}>Karla-santosribeiro@hotmail.com</a></h5>
         </article>
         <article className="contact__option">
           <BiMessageDetail className='contact__option-icon'/>
          <h4>Mensagem LinkedIn</h4>
          <h5><a href="https://www.linkedin.com/in/karla-s-ribeiro/" target="_blank">Clique aqui</a></h5>
         </article>
         <article className="contact__option">
           <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5><a href="https://api.whatsapp.com/send?phone=5513991695131&text=" target="_blank">Clique Aqui</a></h5>
         </article>
        </div>  
      </div>
    </section>
  )
}

export default Contact