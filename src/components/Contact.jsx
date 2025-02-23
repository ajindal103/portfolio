import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { Wrapper } from './hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => { }
  const handleSubmit = (e) => { }


  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center'>
        <motion.div variants={slideIn("left", "tween", 0.1, 0.4)}
          className='flex-[0.6] bg-[#1e1e1e] p-8 rounded-2xl'>
          <p className={`${styles.sectionSubText} text-center`}>
            Get in Touch
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            CONTACT
          </h2>

          <form ref={formRef} onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-6'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Enter Your Name'
                className='bg-[#161617] rounded-lg outlined-none border-none font-medium py-4 px-6 placeholder:text-[#b2b2b2] text-white'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.name}
                onChange={handleChange}
                placeholder='Enter Your Email'
                className='bg-[#161617] rounded-lg outlined-none border-none font-medium py-4 px-6 placeholder:text-[#b2b2b2] text-white'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-[#161617] rounded-lg outlined-none border-none font-medium py-4 px-6 placeholder:text-[#b2b2b2] text-white'
              />
            </label>

            <button
              type="submit"
              className='bg-[#161617] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#161617] rounded-xl'
            >
              {loading ? "Sending..." : "Send"}

            </button>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Wrapper(Contact, "contact")