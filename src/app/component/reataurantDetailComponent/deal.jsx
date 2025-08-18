import React from 'react'
import Image from 'next/image';

export default function deal() {
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
    <div className="grid grid-cols-3 gap-[20px] mt-[103px] max-w-[1528px] w-full mx-auto">
      {deals.map((deal, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${deal.imagepath})` }}
          className="  bg-cover bg-center relative rounded-[12px] overflow-hidden flex flex-col   gap-[160px] "
        >
          {" "}
          <div className=" max-w-[88px] w-full min-h-[66px]  h-full bg-[#03081F]  rounded-b-[12px]  ml-[388px]  flex justify-center items-center">
            <h1 className="font-[Poppins] font-[700] text-[18px] leading-[100%] tracking-[0em] text-white">
              {deal.Off}
            </h1>
          </div>
          <div className="  z-50 ml-[48px] mb-[36px] ">
            <h1 className="font-[Poppins] font-[500] text-[18px] leading-[100%] tracking-[0em] text-[#FC8A06]">
              Restaurant
            </h1>
            <h1 className="font-[Poppins] font-[700] text-[24px] leading-[100%] tracking-[0em] text-[#FFFFFF]">
              {deal.restaurantName}
            </h1>
          </div>
          <div className='absolute flex justify-center item-center w-[97px] h-[89px] right-[0px] bottom-[0px] z-50 bg-[#FFFFFF]/90 rounded-tl-[46px]' >
            <Image width={49} height={49} src="/assets/icons/Plus.svg" alt="" />
          </div>
          <div className="absolute  w-[496px] h-[325px] left-[0px] top-[0px] rounded-[12px] [background:linear-gradient(245.7deg,rgba(255,255,255,0)_0.94%,rgba(3,8,31,0.19)_51.68%,rgba(3,8,31,0.89)_87.9%)]"></div>
        </div>
      ))}
    </div>
  )
}
