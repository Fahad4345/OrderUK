"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Button from "./play";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});
const Navs = ["Home", "Browser Menu", "Special Offer", "Restaurants", "Track Order"]


export default function NavBar() {
  const [seletedTab, setselectedTab] = useState("")
  return (
    <div className="  sm:hidden lg:flex max-w-[1528px] w-full mx-auto mt-[38px] flex flex-row  items-center">
      <Image width={25} height={25} src={"/assets/icons/LOGO 1.svg"} alt="" className=' w-[215px] h-[53px]' />



      <div className="ml-[168px] mr-[53px]  md:hidden lg:flex sm:flex  w-full flex  justify-between">
        {Navs.map((tab, index) => (
          <div className="items-center justify-center flex ">
            <button key={index} className={`font-[Poppins]  w-[160px] h-[45px]  px-3 py-4 font-[500px] text-[18px] leading-[100%] tracking-[0%]  ${seletedTab == tab ? " rounded-[120px] text-white  px-3 py-2 bg-[#FC8A06]  flex justify-center items-center" : ""}`}
              onClick={() => setselectedTab(tab)}
            >{tab}</button>
          </div>




        ))}  </div>

      <div className="max-w-[231px] w-full px-[26.38px] py-[17px]  bg-[#03081F] rounded-[120px] items-center">
        <button className=' max-w-[181.24px] w-full cursor-pointer gap-[11.47px] font-[Poppins] font-[500px] text-[#FFFFFF] flex flex-row text-[18px] leading-[100%] tracking-[0%] items-center'>
          <Image width={30.97} height={27} src={"/assets/icons/Male User.svg"} alt="" className=' w-[30.97px] h-[27px]' />
          Login/Signup </button>
      </div>


    </div>
  );
}
