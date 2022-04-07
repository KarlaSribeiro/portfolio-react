import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/karla-s-ribeiro/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KarlaSribeiro" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/karlatribeiro/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials