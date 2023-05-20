import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
import img from "../assets/img1.jpeg"

const Footer = () => {
  return (
   <footer>
    <div> 
        <img src={img} alt="Founder"/>

        <h2>Kaju saikia</h2>
        <p>Motivation is temporary, but discipline last forever.</p>

    </div>
    <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://youtube.com/kajusaikia" target='blank'>
                <AiFillYoutube/>
            </a>
            <a href="https://instagram.com/kaju___saikia" target='blank'>
                <AiFillInstagram/>
            </a>
            <a href="https://github.com/kaju111" target='blank'>
                <AiFillGithub/>
            </a>
        </article>
    </aside>
    <a href="#home">
        <AiOutlineArrowUp/>
    </a>
   </footer>
  )
}

export default Footer
