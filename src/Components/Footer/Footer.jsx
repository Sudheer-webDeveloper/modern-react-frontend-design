import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Footer = () => {
  return (
    <footer id='contact'>
       <h2>Feel free to reach out for more designs similar to this one. I've got plenty more where that came from! </h2>

       <div className='contact'>
        <h2>Email: sudheertalaudi@gmail.com</h2>
        <h2>Ph:No: 9676234130</h2>
       </div>

       <div className='social-media'>
        <a
          href="https://sudheer-folio.vercel.app/"
          target="_blank"

          className="portfolio"
        >
          portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/talapudisudheer99/"
          target="_blank"
        >
          <IoLogoLinkedin className="linkdin" />
        </a>
        <a href="https://github.com/Sudheer-webDeveloper" target="_blank">
          <FaGithub className="github" />
        </a>
        <a
          href="https://drive.google.com/file/d/1HENfLFy6C0ZPLDHFH_9PQy3FYWOTT7w9/view?usp=sharing"
          target="_blank"
        >
          <RxResume className="resume" />
        </a>
       </div>
    </footer>
  )
}

export default Footer
