import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { projects } from '../utils/constants';
import { fadeIn, textVariant } from '../utils/motion'
import { Wrapper } from './hoc'
import { useInView } from "react-intersection-observer";

const Skills = () => {
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
          What i know
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>

    </>
  )
}

export default Wrapper(Skills, 'skills')