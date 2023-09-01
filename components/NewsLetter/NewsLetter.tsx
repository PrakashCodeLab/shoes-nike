"use client";

import { downAnimation, leftAnimation, rightAnimation } from '@/constants/AnimationConst';
import { motion } from 'framer-motion';
import { delay } from 'framer-motion/dom';
import React from 'react';

const NewsLetter = () => {
  return (
    <div className='max-container w-full flex justify-between items-center max-lg:flex-col max-lg:gap-[3rem]   padding-x padding-y'>
      <motion.div 
       initial='hidden'
       whileInView='show'
       variants={leftAnimation}
      className=''>
        <h3 className='w-[350px] capitalize  max-lg:w-full max-md:w-[350px] font-bold font-montserrat text-[2.5rem] leading-11 text-black '>Sign Up from <span className='text-red-600'>Updates</span> & Newsletter</h3>
      </motion.div>
      <motion.div 
         initial='hidden'
         whileInView='show'
         variants={rightAnimation}
        
      className='w-[500px] max-lg:w-[400px] h-[70px] border rounded-3xl  border-gray-600'>
      <form className='w-full relative   rounded-3xl   h-full flex justify-between items-center '>
        <input className='w-[100%]  h-full  rounded-3xl   pl-2 placeholder:info-text' type='email' placeholder='subscribe@nike.com' />
        <button className='w-[30%] absolute  right-1 top-2 bg-coral-red text-white-400 capitalize font-normal text-[1rem] py-3 transition-colors hover:bg-red-500 rounded-3xl'>sign up</button>
      </form>
      </motion.div>
     
    </div>
  );
}

export default NewsLetter;
