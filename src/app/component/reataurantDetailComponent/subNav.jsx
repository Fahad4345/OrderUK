"use client";
import React, { useContext, useState } from "react";
import { restaurants } from '../../lib/restaurants';
import { MyContext } from "../../context/MyContext";
import Image from "next/image";

export default function SubNav() {
  const [selectedTab, setseletedTab] = useState("Offers");
  const { index } = useContext(MyContext);


  const navlink = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold drinks ",
    " Happy Meal® ",
    "Desserts  ",
    "Hot drinks ",
    "  Sauces ",
    "Orbit®",
  ];
  return (
    <div className="  w-full flex  justify-center flex-col">
      <div className="  sm:mt-[23px] lg:mt-[64px] lg:justify-between items-center flex mx-auto  max-w-[1528px] w-full lg:flex-row sm:flex-col-reverse">
        <h1 className="font-[Poppins] font-[700] lg:text-[32px]  sm:mt-[32px] lg:mt-[0px] sm:text-[18px] leading-[100%] tracking-[0em] text-[#03081F]">{`All Offers from ${restaurants[index].name}`}</h1>
        <div className="flex flex-row lg:w-[360px] sm:w-[344px]  sm:hidden lg:flex  rounded-l-full  gap-[10px] rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%] px-[28px] py-[18px]">
          <Image width={26} height={26} src="/assets/icons/Search More.svg" alt="" />
          <input
            type="text"
            placeholder="Search from menu..."
            className=" text-[#03081F] font-[Poppins] cursor-pointer font-[600] text-[18px] focus:outline-none focus:ring-0 focus:border-transparent "
          />
        </div>
      </div>
      <div className="   bg-[#F3F3F3]   dark:bg-[#FC8A06] mt-[46px]">
        <div className=" sm:hidden  w-full  lg:flex   overflow-hidden flex justify-start  mx-auto  py-[30px]  max-w-[1728px] px-[95px]">
          {navlink.map((nav, index) => (
            <div onClick={() => setseletedTab(nav)} key={index} className={`  w-auto cursor-pointer px-[25px] py-[9px] flex justify-center  items-center ${selectedTab == nav ? "  bg-black rounded-[120px] font-[700]     flex justify-center items-center" : ""}`} >
              <p className={`font-[Poppins] font-[700] text-[21px] leading-[100%] tracking-[0em]  text-white `}>
                {nav}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
