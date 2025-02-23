import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
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
            className='w-50 h-50 rounded-full border-4 border-[#ff740a]'
          />
        </div>
      </motion.div>

      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "exit"}
        variants={fadeIn("", "", 0.1, 2)}
        className='mt-4 text-[#dddddd] text-[17px]  
        leading-[30px] text-justify mx-auto max-w-4xl'
      >
        Hi, I'm Anurag Jindal, a full-stack developer passionate about building scalable 
        systems and seamless user experiences. With expertise in Django, React, PostgreSQL, 
        and cloud technologies, I develop high-performance applications from backend logic to 
        interactive frontends. I thrive on solving complex problems, optimizing performance, 
        and continuously learning new technologies to create impactful digital solutions.
      </motion.p>

    </>
  )
}

export default Wrapper(About, "about")