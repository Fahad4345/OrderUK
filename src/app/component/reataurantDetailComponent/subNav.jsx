"use client";
import React, { useContext } from "react";
import { restaurants } from '../restaurants';
import { MyContext } from "../../context/MyContext";

export default function SubNav() {
  const { index } = useContext(MyContext);
  console.log(restaurants[index].name)

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
      <div className=" mt-[64px] justify-between flex mx-auto  max-w-[1528px] w-full ">
        <h1 className="font-[Poppins] font-[700] text-[32px] leading-[100%] tracking-[0em] text-[#03081F]">{`All Offers from ${restaurants[index].name}`}</h1>
        <div className="flex flex-row w-[360px]   rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Search from menu..."
            className="px-4 py-3 text-[#000000CC]"
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3]  mt-[46px] flex justify-between  mx-auto  max-w-[1728px] py-[30px] px-[95px]">
        {navlink.map((nav, index) => (
          <div key={index} className=" flex flex-col ">
            <p className="font-[Poppins] font-[700] text-[21px] leading-[100%] tracking-[0em] text-[#03081F]">
              {nav}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
