"use client";

import Image from 'next/image';
import React from 'react';
import  SpecialImage   from '@/public/assets/images/offer.svg';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { leftAnimation, rightAnimation } from '@/constants/AnimationConst';
const SpecialOffers = () => {
  return (
    <div className='max-container px-5 max-wide:padding flex justify-center  gap-8 flex-row-reverse  max-lg:flex-col-reverse max-lg:items-center padding-b '>
      <motion.div 
         initial='hidden'
         whileInView='show'
         variants={rightAnimation}
      className='flex-1 flex flex-col gap-3 padding'>
        <h2 className='text-black capitalize font-bold text-3xl font-montserrat'><span className='text-coral-red '>Special</span> Offer</h2>
        <p className='info-text max-w-[500px] '>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='info-text max-w-[500px] '>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

        <div className='flex gap-4 pt-5'>
          <Link className='bg-coral-red text-base text-white flex justify-center items-center p-3 rounded-[2rem] hover:bg-red-700  w-[160px] capitalize' href={'/'}>view details</Link>
     <Link className='bg-primary capitalize text-base text-slate-gray border hover:bg-slate-800  hover:text-white transition-colors  border-slate-gray flex justify-center items-center p-3 rounded-[2rem] w-[160px]' href={'/'}>learn more</Link>
        </div>
      </motion.div>
      <motion.div 
          initial='hidden'
          whileInView='show'
          variants={leftAnimation}
      className='flex-1 '>
        <Image src={SpecialImage} className=' object-contain' alt="specialOffers image" />
      </motion.div>

    </div>
  );
}

export default SpecialOffers;
