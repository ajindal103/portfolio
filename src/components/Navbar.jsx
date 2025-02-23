import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../utils/constants.js';
import { menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav style={{backgroundColor: "#161617"}} className={`${styles.paddingX} w-full py-5 flex justify-center items-center fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-[18px] font-bold cursor-pointer flex text-[#ff740a]'>Anurag Jindal</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-gray-300"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 m-auto min-w-[140px] z-10 rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title
                    ? "text-white"
                    : "text-gray-300"
                    } font-poppins font-medium curosr-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar