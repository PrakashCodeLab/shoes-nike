"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Bgimage from "@/public/assets/images/big-shoe1.png";
import RightAArrow from "@/public/assets/icons/arrow-right.svg";
import Link from "next/link";
import { statistics } from "@/constants/Constants";

import Image1 from "@/public/assets/images/big-shoe1.png";
import Image2 from "@/public/assets/images/big-shoe2.png";
import Image3 from "@/public/assets/images/big-shoe3.png";
import {motion} from 'framer-motion';
import { CardAnimation, leftAnimation, opacityAnimation, rightAnimation } from "@/constants/AnimationConst";
const HeroSec = () => {
  const [image, setImage] = useState(Bgimage);

  const imageChange = (selectedImage: StaticImageData) => {
    setImage(selectedImage);
  };

  return (
    <div className="max-container  flex justify-center items-start max-xl:gap-[10rem]     min-h-[100vh] w-full  max-xl:flex-col">
      <motion.div 
           initial="hidden"
           whileInView='show'
          variants={leftAnimation}
      className="flex-1 w-full flex justify-start items-start flex-col max-wide:padding-x pt-3">
        <div>
          <p className="text-coral-red text-lg leading-7 font-montserrat font-medium">
            Our Summer collections
          </p>
          <h1 className="text-[5rem] max-md:text-[3.5rem] font-extrabold text-black pt-2 max-w-2xl">
            The New Arrival <span className="text-coral-red">Nike</span> Shoes
          </h1>
          <p className="info-text max-w-md pb-6 pt-5">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Link
            className="bg-coral-red w-[160px] mt-3 rounded-2xl flex py-3 justify-around items-center"
            href={"/"}
          >
            <span className="text-white capitalize ">shop now</span>
            <span>
              <Image src={RightAArrow} alt="icon " />
            </span>
          </Link>
        </div>
        <div className="flex gap-[3rem]  pt-10 ">
          {statistics.map((link, index) => (
            <div key={index}>
              <h3 className="text-black text-4xl font-montserrat font-bold capitalize max-md:text-2xl">
                {link.value}
              </h3>
              <p className="info-text">{link.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
     
     
      <div className="flex-1   flex justify-center items-center  flex-col max-xl:w-full max-xl:bg-slate-200 max-xl:padding">
        <motion.div 
            initial='hidden'
            whileInView='show'
            variants={opacityAnimation}
        className=" absolute top-0 right-0 min-h-screen w-[50%] -z-50 bg-slate-200  max-xl:hidden" />
        <motion.div 
          initial='hidden'
          whileInView='show'
          variants={rightAnimation}
        >
        <Image className='transition-all max-md:pt-[3rem]' src={image} alt="hero image" />
        </motion.div>
        
        <motion.div 
           initial='hidden'
           whileInView='show'
           variants={CardAnimation}
        className=" p-4 absolute  max-xl:top-[700px]  flex justify-around items-center gap-7 max-w-[500px] h-[300px] top-[550px]">
          <div
            onClick={() => imageChange(Image1)}
            className="bg-gray-300  shadow-md p-5 rounded-lg"
          >
            <Image src={Image1} alt="hero image 1" />
          </div>
          <div
            onClick={() => imageChange(Image2)}
            className="bg-gray-300  shadow-md p-5 rounded-lg"
          >
            <Image src={Image2} alt="hero image 1" />
          </div>
          <div
            onClick={() => imageChange(Image3)}
            className="bg-gray-300  shadow-md p-5 rounded-lg"
          >
            <Image src={Image3} alt="hero image 1" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSec;
