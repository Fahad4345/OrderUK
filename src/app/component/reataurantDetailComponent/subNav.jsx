"use client";
import React, { useContext, useState } from "react";
import { restaurants } from '../../lib/restaurants';
import { MyContext } from "../../context/MyContext";

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
    <div>
      <div className="  sm:mt-[23px] lg:mt-[64px] lg:justify-between items-center flex mx-auto  max-w-[1528px] w-full lg:flex-row sm:flex-col-reverse">
        <h1 className="font-[Poppins] font-[700] lg:text-[32px]  sm:mt-[32px] lg:mt-[0px] sm:text-[18px] leading-[100%] tracking-[0em] text-[#03081F]">{`All Offers from ${restaurants[index].name}`}</h1>
        <div className="flex flex-row lg:w-[360px] sm:w-[344px]   rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Search from menu..."
            className="px-4 py-3 text-[#000000CC]"
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3] sm:hidden  dark:bg-[#FC8A06] lg:flex mt-[46px]  overflow-hidden flex justify-between  mx-auto  max-w-[1728px] py-[30px] px-[95px]">
        {navlink.map((nav, index) => (
          <div onClick={() => setseletedTab(nav)} key={index} className={` px-[15px] py-[10px] flex justify-center items-center ${selectedTab == nav ? "  bg-black rounded-[120px] text-white font-[700]     flex justify-center items-center" : ""}`} >
            <p className={`font-[Poppins] font-[700] text-[21px] leading-[100%] tracking-[0em] text-[#03081F]  ${selectedTab == nav ? "text-white" : ""}`}>
              {nav}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
