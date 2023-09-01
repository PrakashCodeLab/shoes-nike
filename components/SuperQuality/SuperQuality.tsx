"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import QualityImage from '@/public/assets/images/shoe8.svg'
import ArrowIcon from '@/public/assets/icons/arrow-right.svg';
import {motion} from 'framer-motion';
import { leftAnimation, rightAnimation } from '@/constants/AnimationConst';
const SuperQuality = () => {
  return (
    <div className='max-container flex justify-center   gap-8 max-wide:padding max-lg:flex-col max-lg:items-center max-lg:gap-[3rem] padding-y '>
      <motion.div 
         initial='hidden'
         whileInView='show'
         variants={leftAnimation}
      
      className='flex-1 flex justify-start items-start flex-col '>
        <div className='max-w-[500px] gap-4 flex flex-col justify-start items-start pt-[2rem] max-xl:max-w-[600px]'>
        <h2 className='text-[3rem]  leading-snug capitalize text-black font-semibold font-palanquin'>We Provide You Super <span className='text-coral-red '>Quality</span> Shoes</h2>
        <p className='text-[1.1rem] text-justify leading-8 font-palanquin  text-slate-gray '>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='text-[1.1rem] text-justify leading-8 font-palanquin  text-slate-gray  '>Our dedication to detail and excellence ensures your satisfaction</p>

        <Link  className='bg-coral-red w-[170px] h-[45px] flex justify-around items-center rounded-2xl transition-all hover:bg-red-600 ' href={'/'} >
          <span className='capitalize text-white'>shop now</span>
          <span>
           <Image src={ArrowIcon} alt="image" />

          </span>
        </Link>
        </div>
       
      </motion.div>
      <motion.div 
        initial='hidden'
        whileInView='show'
        variants={rightAnimation}
      className='flex-1 flex justify-center items-center'>
        <Image src={QualityImage} alt="image" />
      </motion.div>
    </div>
  );
}

export default SuperQuality;
