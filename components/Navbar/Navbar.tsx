"use client"

import Image from 'next/image';
import React from 'react';
import { Bars3Icon } from "@heroicons/react/24/outline"
import LogoImage from '@/public/assets/images/header-logo.svg'
import Link from 'next/link';
import { navLinks } from '@/constants/Constants';
import {motion} from 'framer-motion';
import { upAnimation } from '@/constants/AnimationConst';

const Navbar = () => {
  return (
    <motion.section 
     initial='hidden'
     whileInView='show'
     variants={upAnimation}
    className='navbar__wrapper__section flex justify-between items-center py-7   lg:px-6 max-lg:justify-around'>
      <div className='w-[120px] h-[40px]   max-wide:ml-5'>
        <Image src={LogoImage}  className='w-full h-full object-fill' alt="logo image" />
      </div>
      <div>
        <ul className='flex justify-center items-center gap-10 max-lg:hidden'>

          {
            navLinks.map((link , index)=>(
              <Link className='info-text ' key={index} href={link.href} >{link.label}</Link>
            ))
          }
          
        </ul>
      </div>
      <div className='w-[50px] h-[50px] lg:invisible'>
     
      <Bars3Icon className="h-full w-full text-gray-500 " /> 

      </div>
    </motion.section>
  );
}

export default Navbar;
