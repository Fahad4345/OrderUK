"use client"
import React, { useContext } from "react";
import Leftmenu from "./leftmenu";
import Basket from "./basket";
import MidTile from "./midTile";
import { MyContext } from "../../context/MyContext";
import { restaurants } from '../../lib/restaurants';

export default function Ordermenu() {
  const { index, setIndex } = useContext(MyContext);

  return (
    <div className=" max-w-[1528px] mx-auto justify-between flex flex-col">
      <div className="  sm:mt-[23px] lg:mt-[64px] lg:justify-between items-center flex mx-auto  max-w-[1528px] w-full lg:flex-row sm:flex-col-reverse">
        <h1 className="font-[Poppins] font-[600] lg:text-[32px]  sm:mt-[32px] lg:mt-[0px]  sm:text-[18px] leading-[100%] tracking-[0em] text-[#03081F]">{`Order from ${restaurants[index].name}`}</h1>
        <div className="flex flex-row lg:w-[360px] sm:w-[344px]   rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Search from menu..."
            className="px-4 py-3 text-[#000000CC]"
          />
        </div>
      </div>
      <div className=" flex flex-row    justify-center lg:gap-x-[20px] mt-[49px]">
        <Leftmenu />
        <MidTile />
        <Basket />
      </div>
    </div>
  );
}
