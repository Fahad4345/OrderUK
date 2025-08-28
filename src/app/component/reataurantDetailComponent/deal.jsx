"use client"
import React, { useContext } from 'react'
import { restaurants } from '../../lib/restaurants.js';
import { MyContext } from '@/app/context/MyContext.jsx';
import Image from 'next/image.js';

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
  const { index } = useContext(MyContext)
  return (
    <div className="sm:max-w-[calc(100vw_-_22px)] lg:max-w-[calc(100vw_-_22px)]  2xl:max-w-[1528px]  w-full mx-auto mt-[54px] ">


      <div className="  sm:h-[205px] lg:h-full flex-row  lg:gap-[20px] sm:gap-[14px] lg:mt-[60px] sm:mt-[30px]  overflow-y-hidden flex overflow-x-auto ">
        {deals.map((deal, id) => (
          <div key={id}>
            <div

              style={{ backgroundImage: `linear-gradient(245.7deg, rgba(255,255,255,0) 0.94%, rgba(3,8,31,0.19) 51.68%, rgba(3,8,31,0.89) 87.9%),url(${deal.imagepath})` }}
              className=" relative sm:min-w-[150px] sm:min-h-[150px] lg:max-w-[496px] lg:min-h-[325px] bg-cover bg-center  rounded-[12px] flex flex-col   lg:gap-[160px]  "
            >
              { }
              <div className="  cursor-pointer lg:w-[88px] sm:w-[46px] lg:ml-[388px] sm:ml-[87px]  lg:h-[66px] sm:h-[38px] h-full bg-[#03081F]   lg:rounded-b-[12px] sm:rounded-b-[4px] lg:mr-[20px] sm:mr-[16px]  flex justify-center items-center">
                <h1 className="font-[Poppins] font-[700] lg:text-[18px] sm:text-[15px] leading-[100%] tracking-[0em] text-white">
                  {deal.Off}
                </h1>
              </div>
              <div className=" cursor-pointer flex flex-col sm:hidden lg:flex ml-[48px] mb-[36px] ">
                <h1 className="font-[Poppins] font-[500] text-[18px] leading-[130%] tracking-[0em] text-[#FC8A06]">
                  {restaurants[index].name}
                </h1>
                <h1 className="font-[Poppins] font-[700] text-[32px] leading-[130%] tracking-[0em]  text-[#FFFFFF]">
                  {deal.restaurantName}
                </h1>
              </div>


            </div>
            <div className='relative flex justify-between'>
              <div className=" cursor-pointer justify-start items-start flex flex-col lg:hidden sm:flex ml-[10px] mt-[10px] ">
                <h1 className="font-[Poppins] font-[500] text-[13px] leading-[100%] tracking-[0em] text-[#FC8A06]">
                  Restaurant
                </h1>
                <h1 className="font-[Poppins] font-[700] text-[14px] leading-[17px] tracking-[0em] text-black">
                  {deal.restaurantName}
                </h1>
              </div>

              <div className="absolute flex justify-center cursor-pointer item-center lg:w-[97px] lg:h-[97px] sm:w-[50px] sm:h-[50px] lg:right-[0px] lg:bottom-[-1px] sm:right-[0px] sm:bottom-[40px] z-20 bg-[#FFFFFF]/90 rounded-tl-[25px]"

                onClick={() => { setSelectedItem(items); setIsOpen(true); }}
              >
                <Image
                  width={49}
                  height={49}
                  src="/assets/icons/Plus.svg"
                  alt=""
                  className=' sm: w-[38px] lg:w-[49px] '
                />
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}
