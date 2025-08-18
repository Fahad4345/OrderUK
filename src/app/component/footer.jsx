import React from "react";
import Image from "next/image";
import Button from "./play";

export default function Footer() {
  return (
    <div className="max-w-[1728px] mx-auto w-full">
      <div className=" bg-[#D9D9D9] flex-wrap flex flex-row min-h-[371px]  h-full">

        <div className=" flex flex-col mt-[93px] ml-[115px]">
          <Image
            width={25}
            height={25}
            src={"/assets/icons/LOGO 2.svg"}
            alt=""
            className=" w-[215px] h-[53px]"
          />
          <Button className=" mt-[33px]" />
          <p className="font-[Poppins] max-w-[320px] w-full mt-[22px] font-[400] text-[15px] leading-[100%] tracking-[0em] ">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className=" flex flex-col mt-[81px] ml-[151px]">
          <h1 className="font-[Poppins] font-[700] text-[18px] leading-[43px] tracking-[0em] ">Get Exclusive Deals in your Inbox</h1>
          <div>


            <div className="flex flex-row min-w-[485px]  w-full  rounded-l-full  rounded-r-full  border-r-[#FC8A06] border-[1px]  border-[#00000066]  border-opacity-[20%] mt-[23px]">
              <input
                type="text"
                placeholder="youremail@gmail.com"
                className="px-4 py-3 text-[#000000CC] w-full"
              />
              <button className=" z-50 items-center left-[209px] top-[-0.5px]  max-w-[188px] w-full h-[49.5px] rounded-[120px]  bg-[#FC8A06] font-[Poppins] font-[500] text-[18px] leading-[100%] tracking-[0em] text-[#FFFFFF]">
                Subscribe
              </button>
            </div>
          </div>
          <h1 className="font-[Poppins] font-[400] text-[13px] leading-[43px] tracking-[0em]  ml-[30px]">we wont spam, read our email policy</h1>
          <div className="flex flex-row gap-[14px] mt-[11px] ml-[25px]">
            <Image width={45} height={45} src="/assets/icons/Facebook.svg" alt="" />
            <Image width={45} height={45} src="/assets/icons/Instagram.svg" alt="" />
            <Image width={45} height={45} src="/assets/icons/TikTok.svg" alt="" />
            <Image width={45} height={45} src="/assets/icons/Snapchat.svg" alt="" />
          </div>
        </div>
        <div className=" flex flex-col mt-[81px] ml-[40px]">
          <h1 className="font-[Poppins] font-[700] text-[18px] leading-[43px] tracking-[0em] ">Legal Pages</h1>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Terms and conditions</p>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Privacy</p>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Cookies</p>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline "> Modern Slavery Statement</p>


        </div>
        <div className=" flex flex-col mt-[81px] ml-[50px]">
          <h1 className="font-[Poppins] font-[700] text-[18px] leading-[43px] tracking-[0em] ">Imporatant Links</h1>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Get help</p>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Add your restaurant</p>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Sign up to deliver</p>
          <p className="font-[Poppins] font-[400] text-[15px] leading-[43px] tracking-[0em] underline ">Create a business account</p>


        </div>

      </div>
      <div className="bg-[#03081F] flex flex-row   justify-between  min-h-[75px] items-center">
        <h1 className=" ml-[116px] font-[Poppins] font-[400] text-[15px] leading-[100%] tracking-[0em] text-[#FFFFFF]">
          Order.uk Copyright 2024, All Rights Reserved.
        </h1>
        <div className=" mr-[100px] max-w-[655px] w-full flex justify-between">
          {[
            "Privacy",
            "Policy",
            "Terms",
            "Pricing",
            " Do not sell or share my personal information",
          ].map((option) => (
            <button
              key={option}
              className="font-[Poppins] font-[400]  text-[white] text-[16px] leading-[100%]"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
