

import React, { Fragment } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/constants/Constants';
import { TruckIcon } from "@heroicons/react/24/outline";

import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
const ServiceSec = () => {
  return (
    <div className='w-full max-container padding max-lg:padding-y flex justify-center items-center gap-[50px]  max-md:flex-col'>
       <ServiceCard title={"Free shipping"} 
       img={<TruckIcon className='h-6 w-6 text-white-400 font-medium text-base' />}
       para={"Enjoy seamless shopping with our complimentary shipping service."}/>

      <ServiceCard title={"Secure Payment"} 
       img={<ShieldCheckIcon className='h-6 w-6 text-white-400 font-medium text-base' />}
       para={"Experience worry-free transactions with our secure payment options."}/>

      <ServiceCard title={"Love to help you"} 
       img={<HandThumbUpIcon className='h-6 w-6 text-white-400 font-medium text-base' />}
       para={"Our dedicated team is here to assist you every step of the way."}/>
    </div>
  );
}

export default ServiceSec;
