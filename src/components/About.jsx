import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../utils/constants';
import { fadeIn, textVariant } from '../utils/motion'
import { Wrapper } from './hoc'
import { profile } from '../assets'
import { useInView } from "react-intersection-observer";


const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "exit"}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          Overview
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Introduction
        </h2>

        <div className='flex items-center justify-center mt-10 mb-5'>
          <img
            src={profile}
            alt="profile"
            className='w-50 h-50 rounded-full border-4 border-[#f0740a]'
          />
        </div>
      </motion.div>

      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "exit"}
        variants={fadeIn("", "", 0.1, 2)}
        className='mt-4 text-[#b2b2b2] text-[17px]  
        leading-[30px] text-justify mx-auto max-w-4xl'
      >
        I'm a full-stack developer with a passion for creating
        beautiful and functional web applications. I have experience
        working with a variety of technologies and frameworks, including
        React, Node.js, Express, and MongoDB. I'm always looking to learn
        new things and improve my skills, and I'm excited to take on new
        challenges and projects. I've also worked with RESTful APIs,
        GraphQL, and cloud services like AWS and Heroku. Let's build
        something amazing together!
      </motion.p>

    </>
  )
}

export default Wrapper(About, "about")