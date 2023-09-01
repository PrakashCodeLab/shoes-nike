"use client";
import { serviceProps } from '@/types/types';
import React, { ReactNode } from 'react';
import {motion} from 'framer-motion'
import { CardAnimation } from '@/constants/AnimationConst';


const ServiceCard = ({img, title, para}:serviceProps) => {
  return (
    <motion.article 
    initial='hidden'
    whileInView='show'
    variants={CardAnimation}
    className='shadow-md rounded-md p-5 max-w-[400px] flex justify-start items-start flex-col gap-5'>
         <div className='w-[50px] h-[50px] shadow-sm rounded-full flex justify-center items-center bg-coral-red'>
             {img}
         </div>
         <h3 className='text-2xl font-bold text-black capitalize '>{title}</h3>
         <p className='info-text'> {para}</p>
    </motion.article>
  );
}

export default ServiceCard;
