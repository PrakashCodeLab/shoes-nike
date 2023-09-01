import Image from "next/image";
import React from "react";
import FooterLogo from "@/public/assets/images/footer-logo.svg";
import FacebookIcon from "@/public/assets/icons/facebook.svg";
import TwitterIcon from "@/public/assets/icons/twitter.svg";
import InstaIcon from "@/public/assets/icons/instagram.svg";
import { footerLinks } from "@/constants/Constants";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="max-container  max-wide:pt-[6rem] pt-[6rem] pb-6 max-wide:px-10 max-wide:py-5 flex flex-col justify-center items-center gap-[80px]">
      <div className=" w-full flex justify-start  gap-[80px] items-stretch max-lg:flex-col">
        <div  className="max-w-[400px] flex flex-col gap-3 justify-start">
          <div className="w-[150px] h-[60px] ">
            <Image src={FooterLogo} className="w-full h-full object-contain" alt="footer logo" />
          </div>
          <div>
            <p className="text-white-400 text-lg leading-7 font-palanquin text-justify ">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
          </div>

          <div className="flex gap-5 pt-4">
            <Image src={FacebookIcon} className="bg-white rounded-md  w-[40px]" alt="footer icon1" />
            <Image src={TwitterIcon} className="bg-white rounded-md  w-[40px]" alt="footer icon1" />
            <Image src={InstaIcon} className="bg-white rounded-md w-[40px] " alt="footer icon1" />
          </div>
        </div>
        <div className="grid grid-cols-3  w-full place-items-stretch   max-wide:grid-cols-2  gap-[30px]">
        {footerLinks.map((footLink, index) => (
          <div className="max-w-[250px]" key={index}>
            <h2 className="text-blue-100 font-b font-semibold text-[1.2rem]  capitalize font-montserrat">{footLink.title}</h2>
            <ul className="items-baseline flex flex-col gap-3 justify-start pt-3">
              {footLink.links.map((link, index) => (
                <li  key={index}>
                  <Link className="text-white text-base hover:text-blue-300 capitalize font-palanquin" href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
     
      <div className="flex justify-between items-center w-full">
        <p className="text-white font-normal text-[1.3rem] font-palanquin max-md:text-sm">&copy; Copyright. All rights reserved.</p>
        <p className="text-white font-normal text-[1.3rem] font-palanquin  max-md:text-sm">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
