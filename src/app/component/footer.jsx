import React from "react";
import Image from "next/image";
import Button from "./play";
const legalPages = [
  "Terms and conditions",
  "Privacy",
  "Cookies",
  "Modern Slavery Statement",
];
const importantLinks = [
  "Get help",
  "Add your restaurant",
  "Sign up to deliver",
  "Create a business account",
];

export default function Footer() {
  return (
    <div className="w-full bg-[#D9D9D9]/60 ">
      <div className="    sm:gap-x-[30px] lg:gap-x-[10px]   gap-y-[10px]    lg:items-center  lg:justify-center 2xl:start  2xl:justify-start sm:justify-center sm:items-center  xl: justify-center  max-w-[1728px] mx-auto flex lg:flex-row    sm:flex-col lg:flex-wrap min-h-[371px]  sm: mt-[63px] lg:mt-[45px]  h-full">

        <div className="  sm: ml-[45px] flex flex-col  lg:justify-start lg:items-start  sm:justify-center sm:items-center lg:mt-[93px] lg:ml-[115px]">
          <Image
            width={25}
            height={25}
            src={"/assets/icons/LOGO 2.svg"}
            alt=""
            className=" lg:w-[215px] cursor-pointer lg:h-[53px] sm:w-[266px] sm:h-[66px] sm:mt-[58px] lg:mt-[0px]"
          />
          <Button className=" mt-[33px] cursor-pointer" />
          <p className="font-[Poppins] sm:text-center lg:text-start max-w-[320px] w-full lg:mt-[22px] sm:mt-[20px] font-[400] text-[15px] leading-[100%] tracking-[0em] ">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className="  sm: ml-[45px]  flex flex-col lg:mt-[81px]  lg:justify-start lg:items-start  sm:justify-center sm:items-center lg:ml-[151px]  sm:mt-[61px] ">
          <h1 className="font-[Poppins] justify-items-start font-[700] text-[18px] leading-[43px] tracking-[0em] ">Get Exclusive Deals in your Inbox</h1>
          <div>


            <div className="flex  relative sm: bg-[#D9D9D9] flex-row   justify-between lg:min-w-[485px] sm:min-w-[374px] min-h-[59px]   rounded-l-full  rounded-r-full   border-[#00000066]  border-opacity-[20%] sm:mt-[13px] lg:mt-[23px]">
              <input
                type="text"
                placeholder="youremail@gmail.com"
                className="lg:pl-[28px] sm:pl-[25px]   font-[Poppins] font-[400] text-[15px]
                           overflow-hidden text-[#000000CC] focus:outline-none focus:ring-0 focus:border-transparent"
              />
              <button className=" cursor-pointer items-center justify-center flex  absolute right-[-1px] top-[-1px]  max-w-[188px] w-[171px] h-[59px] rounded-[120px]  bg-[#FC8A06] ">
                <p className="  font-[700] text-[16px]  font-[Poppins]  text-[#FFFFFF]">Subscribe</p>

              </button>
            </div>
          </div>
          <h1 className="font-[Poppins] font-[400] text-[13px] leading-[43px] tracking-[0em]  lg:ml-[30px]">we wont spam, read our email policy</h1>
          <div className="flex flex-row gap-[14px] mt-[11px]   cursor-pointer  lg:mt-[11px] lg:ml-[25px]">
            <Image width={45} height={45} src="/assets/icons/Facebook.svg" alt="" />
            <Image width={45} height={45} src="/assets/icons/Instagram.svg" alt="" />
            <Image width={45} height={45} src="/assets/icons/TikTok.svg" alt="" />
            <Image width={45} height={45} src="/assets/icons/Snapchat.svg" alt="" />
          </div>
        </div>
        <div className=" flex lg:flex-row sm:flex-col">
          <div className="flex flex-col lg:mt-[81px] lg:ml-[40px] sm:mt-[46px] sm:ml-[0px] sm:mb-[45px] lg:mb-[0px] sm:mr-[100px] lg:mr-[0px]">
            <h1 className="font-[Poppins] font-[700] text-[18px] leading-[43px] tracking-[0em]">
              Legal Pages
            </h1>

            {legalPages.map((page, index) => (
              <div key={index} className="group  transition duration-300 cursor-pointer">
                <p

                  className="font-[Poppins] inline-block relative cursor-pointer font-[400] text-[15px] leading-[43px] tracking-[0em] "
                >
                  {page}<span className="absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-[#FC8A06]"></span>

                </p>  </div>
            ))}
          </div>
          <div className="flex flex-col lg:mt-[81px] lg:ml-[50px] sm:mb-[45px] lg:mb-[0px] sm:mr-[100px] lg:mr-[0px]">
            <h1 className="font-[Poppins] font-[700] text-[18px] leading-[43px] tracking-[0em]">
              Imporatant Links
            </h1>

            {importantLinks.map((link, index) => (
              <div key={index} className="group  transition duration-300 cursor-pointer">
                <p

                  className="font-[Poppins] inline-block relative cursor-pointer font-[400] text-[15px] leading-[43px] tracking-[0em] "
                >
                  {link}<span className="absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-[#FC8A06]"></span>

                </p>  </div>

            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#03081F] flex flex-row   justify-between  min-h-[75px] items-center">
        <h1 className="  sm:mx-auto lg:ml-[116px]  cursor-pointer font-[Poppins] font-[400] text-[15px] leading-[100%] tracking-[0em] text-[#FFFFFF]">
          Order.uk Copyright 2024, All Rights Reserved.
        </h1>
        <div className="  sm:hidden lg:flex mr-[100px] max-w-[655px] w-full flex justify-between">
          {[
            "Privacy",
            "Policy",
            "Terms",
            "Pricing",
            " Do not sell or share my personal information",
          ].map((option) => (
            <button
              key={option}
              className="font-[Poppins] font-[400]  cursor-pointer text-[white] text-[16px] leading-[100%]"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
