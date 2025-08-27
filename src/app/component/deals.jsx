"use client"
import Image from "next/image";
import Header from "./header";
import NavBar from "@/app/component/NavBar";
import Banner from "@/app/component/banner2";
import { useState } from "react";

export default function Deals() {
  const [selectedTab, setseletedTab] = useState("Vegan");
  const navs = ["Vegan", "  Sushi", " Pizza & Fast food", " Others"]
  const deals = [
    {
      restaurantName: "chef Burgers London",
      Off: "-40%",
      imagepath: "/assets/icons/Rectangle8.png",
    },
    {
      restaurantName: "Grand Ai Cafe London",
      Off: "-20%",
      imagepath: "/assets/icons/Rectangle.png",
    },
    {
      restaurantName: "Grand Ai Cafe London",
      Off: "-17%",
      imagepath: "/assets/icons/Rectangle8.png",
    },
  ];
  return (
    <div className="sm:max-w-[calc(100vw_-_22px)] lg:max-w-[calc(100vw_-_22px)]  flex-wrap 2xl:max-w-[1528px] w-full  mx-auto mt-[54px] ">
      <div className=" flex  justify-between items-center">
        <div>
          <h1 className=" cursor-pointer font-[Poppins] font-[700] lg:text-[32px]  sm:text-[16px] leading-[100%] tracking-[0em] text-[#000000]">
            Up to -40% 🎊 Order.uk exclusive deals
          </h1>
        </div>
        <div className="  sm:hidden lg:flex  justify-end   flex   ">
          <div className=" flex justify-between  ">
            {navs.map((tab, id) => (
              <button key={id} className={`font-[Poppins]  cursor-pointer w-auto font-[400] text-[16px] leading-[100%] tracking-[0em] px-[22px] py-[17px]  ${selectedTab == tab ? " rounded-[120px] text-[#FC8A06]    border-[1px] border-[#FC8A06]  flex justify-center items-center" : ""}`}
                onClick={() => setseletedTab(tab)}>
                {tab}
              </button>
            ))}

          </div>
        </div>
      </div>

      <div className="  flex-row  lg:gap-[20px] sm:gap-[14px] mt-[60px]   flex overflow-x-auto overflow-hidden">
        {deals.map((deal, index) => (
          <div key={index}>
            <div

              style={{ backgroundImage: `linear-gradient(245.7deg, rgba(255,255,255,0) 0.94%, rgba(3,8,31,0.19) 51.68%, rgba(3,8,31,0.89) 87.9%) ,url(${deal.imagepath})` }}
              className=" relative  cursor-pointer sm:min-w-[150px] sm:min-h-[150px] lg:max-w-[496px] lg:min-h-[325px] bg-cover bg-center  rounded-[12px] flex flex-col   lg:gap-[160px]  "
            >
              {" "}
              <div className="  lg:w-[88px] sm:w-[46px] lg:ml-[388px] sm:ml-[87px]  lg:h-[66px] sm:h-[38px] h-full bg-[#03081F]   lg:rounded-b-[12px] sm:rounded-b-[4px] lg:mr-[20px] sm:mr-[16px]  flex justify-center items-center">
                <h1 className="font-[Poppins] font-[700] lg:text-[18px] sm:text-[15px] leading-[100%] tracking-[0em] text-white">
                  {deal.Off}
                </h1>
              </div>
              <div className="  flex flex-col sm:hidden lg:flex  ml-[48px] mb-[36px] ">
                <h1 className="font-[Poppins] font-[500] text-[18px] leading-[130%] tracking-[0em] text-[#FC8A06]">
                  Restaurant
                </h1>
                <h1 className="font-[Poppins] font-[700] text-[32px] leading-[130%] tracking-[0em]  text-[#FFFFFF]">
                  {deal.restaurantName}
                </h1>
              </div>

            </div>
            <div className="  justify-start items-start flex flex-col lg:hidden sm:flex ml-[10px] mt-[10px] ">
              <h1 className="font-[Poppins] font-[500] text-[13px] leading-[100%] tracking-[0em] text-[#FC8A06]">
                Restaurant
              </h1>
              <h1 className="font-[Poppins] font-[700] text-[14px] leading-[17px] tracking-[0em] text-black">
                {deal.restaurantName}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
