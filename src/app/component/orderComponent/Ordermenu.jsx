import React from "react";
import Leftmenu from "./leftmenu";
import Basket from "./basket";
import MidTile from "./midTile";

export default function Ordermenu() {

  return (
    <div className=" max-w-[1528px] mx-auto justify-between flex flex-col">
      <div className=" mt-[64px] justify-between flex mx-auto  max-w-[1528px] w-full">
        <h1 className="font-[Poppins] font-[700] text-[32px] leading-[100%] tracking-[0em] text-[#03081F]">
          {" "}
          Order from Mc Donalds
        </h1>
        <div className="flex flex-row w-[360px]   rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Search from menu..."
            className="px-4 py-3 text-[#000000CC]"
          />
        </div>
      </div>
      <div className=" flex flex-row  gap-[20px] mt-[49px]">
        <Leftmenu />
        <MidTile />
        <Basket />
      </div>
    </div>
  );
}
