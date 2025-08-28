"use client"
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { MyContext } from "../../context/MyContext";
import { restaurants } from '../../lib/restaurants';


export default function SmMenuPop({ onSmMenuPopupClose }) {
    const { index, selectedCategory, setCategory } = useContext(MyContext);

    return (
        <div onClick={() => { onSmMenuPopupClose();; }} className='fixed inset-0 justify-center items-center  flex z-50  bg-black/80'>
            <div onClick={(e) => e.stopPropagation()} className='flex flex-col  max-w-[367px] w-full'>

                <div className='    max-w-[367px] w-full  min-h-[1078px]  border-[#BCBCBC]  bg-[#FBFBFB] border-[1px]  rounded-[12px] flex flex-col'>
                    <div className='ml-[34px] mb-[48px] items-center flex gap-[20px] mt-[49px]'>
                        <Image src="/assets/icons/Menu.svg" width={55} height={55} alt="" />
                        <h1 className=' font-[Poppins] fonty-[600]  text-[32px]  leading-[100%] tracking-[0em] '>Menu</h1>
                    </div>
                    {Object.keys(restaurants[index].menu).map((category, index) => (
                        <div key={index} className={` cursor-pointer  ${category === selectedCategory ? " bg-[#03081F]  text-white" : ""}`} onClick={() => setCategory(category)}>
                            <h1 className='font-[Poppins] ml-[34px]  font-[700] text-[22px] leading-[83px] tracking-[0em]'>{category}</h1>

                        </div>

                    ))
                    }

                </div>
                <div

                    style={{
                        backgroundImage: ` linear-gradient(245.7deg, rgba(255, 255, 255, 0) 0.94%, rgba(3, 8, 31, 0.19) 51.68%, rgba(3, 8, 31, 0.89) 87.9%),
                        url('/assets/icons/Rectangle8.png')` }}
                    className=" relative lg:mt-[33px] sm:max-w-[364px] sm:max-h-[325px] lg:max-w-[367px] sm:hidden lg:flex lg:max-h-[325px] bg-cover bg-center  rounded-[12px] flex flex-col   lg:gap-[160px]  "
                >
                    {" "}
                    <div className="   z-50 lg:w-[88px] sm:w-[46px] lg:ml-[22px] sm:ml-[87px]  lg:h-[66px] sm:h-[38px] h-full bg-[#03081F]   lg:rounded-b-[12px] sm:rounded-b-[4px] lg:mr-[20px] sm:mr-[16px]  flex justify-center items-center">
                        <h1 className="font-[Poppins] font-[700] lg:text-[18px] sm:text-[15px] leading-[100%] tracking-[0em] text-white">
                            20%
                        </h1>
                    </div>
                    <div className="  flex flex-col sm:hidden lg:flex z-50 ml-[22px] mb-[26px] ">
                        <h1 className="font-[Poppins] font-[500] text-[18px] leading-[100%] tracking-[0em] text-[#FC8A06]">
                            Special offer
                        </h1>
                        <h1 className="font-[Poppins] font-[700] text-[24px] leading-[100%] tracking-[0em]  text-[#FFFFFF]">
                            First Order Discount
                        </h1>
                    </div>
                    <div className="absolute flex justify-center item-center w-[71.77px] h-[89px] right-[0px] bottom-[-1px] z-50 bg-[#FFFFFF]/90 rounded-tl-[46px]"
                        onClick={() => addtoCart(items)}>
                        <Image
                            width={36.26}
                            height={49}
                            src="/assets/icons/Plus.svg"
                            alt=""
                        />
                    </div>

                </div></div>
        </div>
    )
}
