import React from 'react'
import { motion, stagger } from 'framer-motion'
import { styles } from '../../styles'
import { services } from '../../utils/constants'
import { staggerContainer } from '../../utils/motion'

const Wrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    }

export default Wrapper