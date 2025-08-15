"use client";
import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import Image from "next/image";

export default function Maps() {
    const { Restname } = useContext(MyContext);
  return (
    <div className='relative  max-w-[1528px] mx-auto mt-[64px] shadow-[5px_5px_14px_0px_#00000040] rounded-[12px]'>
      <div className=' absolute top-[110px] left-[130px]  max-w-[466px] w-full min-h-[539px] bg-[#03081FF7] items-center justify-center flex  rounded-[12px]'>
        
        <div className="ml-[43px] ">
          <h1 className="font-[Poppins] font-[700] text-[32px] leading-[38px] tracking-[0em] text-white">{Restname}</h1>
        <h1  className="font-[Poppins] font-[600] text-[22px] leading-[38px] tracking-[0em] text-[#FC8A06]">  South London</h1>
        <p className=" mt-[20px] font-[Poppins] font-[400] text-[18px] leading-[31px] tracking-[0em] text-white">Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
          <p className="font-[Poppins] font-[700] text-[18px] leading-[46px] tracking-[0em] text-white"> Phone number</p>
          <p className="font-[Poppins] font-[400] text-[24px] leading-[38px] tracking-[0em] text-[#FC8A06]">+934443-43</p>
          <h1 className="font-[Poppins] font-[700] text-[18px] leading-[46px] tracking-[0em] text-white">Website</h1>
          <a  className="font-[Poppins] font-[400] text-[24px] leading-[38px] tracking-[0em] text-[#FC8A06]"href="">http://mcdonalds.uk/</a>

        </div>



       </div>
          <Image width={ 1528 } height={1528} alt="" src="/assets/icons/map.png" className='rounded-[12px]' />
     </div>
  )
}
