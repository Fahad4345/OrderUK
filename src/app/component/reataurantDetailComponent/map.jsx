"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { restaurants } from '../../lib/restaurants';
import { MyContext } from "../../context/MyContext";

export default function Maps() {
  const { index } = useContext(MyContext);
  return (
    <div className='relative sm:max-w-[calc(100vw_-_22px)] lg:max-w-[calc(100vw_-_22px)]  2xl:max-w-[1528px]  mx-auto lg:mt-[64px] sm:mt-[40px] shadow-[5px_5px_14px_0px_#00000040] rounded-[12px] overflow-hidden'>
      <div className=' absolute lg:top-[49px] lg:left-[130px] sm:top-[111px] sm:left-[23px]  lg:max-w-[466px]  sm:max-w-[361px] w-full lg:min-h-[539px] sm:min-h-[468px] bg-[#03081FF7] items-center justify-center flex  rounded-[12px]'>

        <div className="lg:ml-[43px] sm:ml-[33px]  cursor-pointer">
          <h1 className="font-[Poppins] font-[700] text-[32px] leading-[38px] tracking-[0em] text-white">{restaurants[index].name}</h1>
          <h1 className="font-[Poppins] font-[600] text-[22px] leading-[38px] tracking-[0em] text-[#FC8A06]">  South London</h1>
          <p className=" mt-[20px] font-[Poppins] text-wrap font-[400] text-[18px] leading-[31px] tracking-[0em] text-white">Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
          <p className="font-[Poppins] font-[700] text-[18px] leading-[46px] tracking-[0em] text-white"> Phone number</p>
          <p className="font-[Poppins] font-[400] text-[24px] leading-[38px] tracking-[0em] text-[#FC8A06]">+934443-43</p>
          <h1 className="font-[Poppins] font-[700] text-[18px] leading-[46px] tracking-[0em] text-white">Website</h1>
          <a className="font-[Poppins] font-[400] text-[24px] leading-[38px] tracking-[0em] text-[#FC8A06]" href="">http://mcdonalds.uk/</a>

        </div>



      </div>
      <div className=" sm:hidden lg:flex  cursor-pointer absolute top-[219px] left-[1176px]" >
        <div className=" relative   min-w-[231px] w-full h-[73px] justify-center  bg-white flex flex-col rounded-[12px] shadow-[5px_5px_14px_0px_#00000040]">
          <p className=" font-[Poppins] font-[600] text-[16px] leading-[20px] tracki-[0em] ml-[41px]">
            {restaurants[index].name}
          </p>
          <p className=" font-[Poppins] font-[400] text-[16px] leading-[20px] tracki-[0em] ml-[41px]">South London</p>
          <div className="w-[73px] rounded-full justify-center items-center flex h-[73px] absolute top-[-25px] left-[185px] bg-[#03081F]">
            <Image alt="" width={45} height={45} src="/assets/icons/Previous Location.svg" />
          </div>
        </div>
      </div>

      <Image width={1528} height={659} alt="" src="/assets/icons/map.png" className='  sm:h-[659px]  rounded-[12px]' />
    </div>
  )
}
