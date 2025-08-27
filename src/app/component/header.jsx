"use client"
import React, { useState } from "react";
import Image from "next/image";
import SmBasket from './popup/basket';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" sm:hidden lg:flex max-w-[1528px]  xl:justify-between     mx-auto  max-h-[70px]  flex  flex-row bg-[#FAFAFA] border-[1px]  rounded-bl-[12px] rounded-br-[12px] border-[#0000001A] items-center">
      <div className=" flex cursor-pointer flex-row items-center  min-w-[400px] gap-[12px] ml-[37px] ">
        <p className="font-[Poppins] font-[500] text-[25px] leading-[100%] tracking-[0em]">
          🌟
        </p>
        <p className=" font-[Poppins] font-[500] text-[15px] leading-[100%] tracking-[0em]">
          {" "}
          Get 5% Off your first order{" "}
          <span className="font-[Poppins] font-[700] text-[15px] leading-[100%] tracking-[0em] text-[#FC8A06] underline">
            Promo:ORDER5
          </span>
        </p>
      </div>
      <div className=" flex gap-[73px]">
        <div className="  xl:hidden 2xl:flex  flex flex-row items-center  justify-end overflow-hidden">
          <Image
            width={25}
            height={25}
            src={"/assets/icons/Location.svg"}
            alt=""
            className=" w-[25px] h-[25px]"
          />
          <p className="font-[Poppins] cursor-pointer font-[500] text-[15px] leading-[100%] tracking-[0em] ml-[14px] mr-[13px]">
            Regent Street,{" "}
            <span className="font-[500px] text-[15px] leading-[100%] tracking-[0em] underline">
              A4
            </span>
            , A4201, London
          </p>
          <a
            href=""
            className="font-[Poppins]  cursor-pointer font-[500] text-[14px] leading-[100%] tracking-[0em] underline  text-[#FC8A06] "
          >
            Change Location
          </a>
        </div>
        <div className="bg-[#028643] cursor-pointer flex flex-row items-center    min-w-[378px]   rounded-bl-[12px] rounded-br-[12px] ">

          <div className=" flex justify-center  items-center  min-w-[88px] ">
            <Image
              width={43}
              height={43}
              src={"/assets/icons/FullShoppingBasket.svg"}
              alt=""
              className=" w-[43px] h-[43px]   "
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="w-[0px] h-[70px] border-[1px] opacity-[30%] border-[#FFFFFF]"></div>
          <div className=" flex justify-center  items-center min-w-[112px]">
            <p className="font-[Poppins] font-[600] text-[16px] leading-[150%] tracking-[0em] text-[#FFFFFF]  ">
              23 Items
            </p>
          </div>

          <div className="w-[0px] h-[70px] border-[1px] opacity-[30%] border-[#FFFFFF]"></div>

          <div className="flex justify-center  items-center  min-w-[116px]">
            <p className=" font-[Poppins] font-[600] text-[16px] leading-[150%] tracking-[0em] text-[#FFFFFF]  mx-[18px]">
              GBP 79.89
            </p>
          </div>

          <div className="w-[0px] h-[70px] border-[1px] opacity-[30%] border-[#FFFFFF]"></div>
          <div className=" flex justify-center  items-center min-w-[62px]">
            <Image
              width={720}
              height={600}
              src={"assets/icons/ForwardButtonWhite.svg"}
              alt=""
              className=" w-[38px] h-[38px] "
            />
          </div>

        </div>
      </div>

      {isOpen && (

        <SmBasket onBasketClose={() => { setIsOpen(false) }} />
      )}
    </div>
  );
}
