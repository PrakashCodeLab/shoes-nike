'use client';

import { products } from '@/constants/Constants';
import Image from 'next/image';
import React from 'react';
import StarReview from '../../public/assets/icons/star.svg';
import {motion} from 'framer-motion'
import { CardAnimation, downAnimation } from '@/constants/AnimationConst';
const PopularProducts = () => {

  const review : number =  4.5 ;
  return (
    <div className='max-container flex flex-col justify-start items-start gap-[50px] max-wide:padding '>
       <motion.div 
           initial='hidden'
           whileInView='show'
           variants={downAnimation}
       className='flex justify-start items-start flex-col gap-4 max-md:justify-center max-md:items-center '>
         <h3 className='text-4xl text-black font-bold max-md:text-center'>Our Popular <span className='text-coral-red'>Products</span></h3>
        <p className='text-justify max-w-[430px] max-md:max-w-[350px]  text-base leading-7 text-gray-500 font-palanquin  max-md:text-center'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
       </motion.div>
       <div className='flex justify-around w-full max-lg:gap-5  items-start max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:place-items-center'>
         {
          products.map((pro ,index)=>(
            <motion.div 
            initial='hidden'
            whileInView='show'
            variants={CardAnimation}
            transition={{delay:1.5}}
            
            className='flex justify-start items-start gap-2 p-2  flex-col ' key={index}>
               <div>
                  <Image src={pro.imgURL} alt="product iimages" />
               </div>
               <div className='flex gap-2 pt-1'>
                  <Image src={StarReview} alt="product star" />
                  <h3 className='info-text capitalize '>({review})</h3>
               </div>
               <h3  className='pt-1 text-xl font-bold font-montserrat text-black'>{pro.name}</h3>
               <p className='text-coral-red text-sm capitalize font-montserrat font-bold '>{pro.price}</p>
            </motion.div>
          ))
         }
       </div>
    </div>
  );
}

export default PopularProducts;
