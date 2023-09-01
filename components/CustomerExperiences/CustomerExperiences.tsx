'use client';

import { reviews } from "@/constants/Constants";
import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import {motion} from 'framer-motion';
import { downAnimation, leftAnimation, rightAnimation } from "@/constants/AnimationConst";

const CustomerExperiences = () => {
  return (
    <div className="bg-pale-blue  flex justify-center items-center flex-col padding gap-[50px] ">
      <motion.div 
        initial='hidden'
        whileInView='show'
        variants={downAnimation}
      className="flex justify-center items-center flex-col gap-3 ">
        <h2 className="capitalize text-4xl font-bold text-black text-center">What Our <span className="text-coral-red">Customers</span> Say?</h2>
        <p className="info-text max-w-[600px] text-center pt-3 font-palanquin">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </motion.div>
      <div className="flex justify-center items-center gap-[100px] max-lg:flex-col ">
        {reviews.map((rev, index) => (
          <motion.div 
            initial='hidden'
            whileInView='show'
            variants={index === 0 ? leftAnimation : rightAnimation }
          className="w-[400px] flex justify-center items-center flex-col  p-3 gap-4" key={index}>
            <div className="w-[80px] h-[80px] ">
              <Image className="w-full h-full object-contain rounded-full " src={rev.imgURL} alt="profile" />
            </div>
            <p className="info-text text-center max-md:max-w-[300px]">{rev.feedback}</p>
            <p className="info-text flex gap-4 text-xl">
              <span>
                <StarIcon className=" h-6 w-6 text-coral-red " />
              </span>
              <span >({rev.rating})</span>
            </p>
            <h4 className="text-2xl text-black capitalize font-montserrat font-bold ">{rev.customerName}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerExperiences;
