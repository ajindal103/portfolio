import React from 'react'
import { styles } from "../styles";
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="mx-auto pt-40 sm:pb-30 w-full">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-start items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 text-[#ff740a]'>
            <FaCircle className="text-[#ff740a] w-5 h-5" />
          </div>
          <div className='w-1 sm:h-90 h-90 orange-gradient -mt-1' />
        </div>

        <div className='flex flex-col justify-start items-start'>
          <h1 className={`${styles.heroHeadText} text-white pt-13 inline-block min-w-[300px]`}>
            Hi, I'm &nbsp;
            <span className="inline-block min-w-[140px]">
              <ReactTyped
                strings={[
                  "Anurag",
                  "Developer",
                  "Coder",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="text-[#ff740a]"
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100 text-justify mx-auto`}>
            I am a passionate developer who loves to code in Python and JavaScript.
            I enjoy building web applications and learning new technologies.
          </p>
          <br />
          <div className='mt-5'>
            <ul className='flex gap-4 items-center'>
              <li onClick={() => window.open("http://linkedin.com/in/anuragjindal121", "_blank")}>
                <FaLinkedin className='text-4xl hover:text-[#ff740a] cursor-pointer' />
              </li>
              <li onClick={() => window.open("https://github.com/ajindal103", "_blank")}>
                <FaGithub className='text-4xl hover:text-[#ff740a] cursor-pointer' />
              </li>
              <li>
                <BiLogoGmail className='text-4xl hover:text-[#ff740a] cursor-pointer' />
              </li>
              <li>
                <button
                  className='flex gap-2 items-center 
                  text-1.5xl cursor-pointer border-2 
                  px-3 py-1 rounded-lg
                  hover:bg-[#ff740a] hover:text-[#161617]'
                >
                  <FaDownload />
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero