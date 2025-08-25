"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import SmBasket from './popup/basket';

export default function SmHeader() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='lg:hidden sm:flex flex flex-col'>
            <div className='flex  justify-between w-full'>
                <Image width={154} height={38} src={"/assets/icons/LOGO 1.svg"} alt="" className=' flex justify-start ml-[16px] mt-[27px] w-[154px] h-[38px]' />
                <div className='flex '>
                    <div className="h-[91px]   w-[1px] bg-[#D9D9D9]"></div>
                    <Image width={65} height={65} src={"/assets/icons/MenuBar.svg"} alt="" className=' mt-[14px] mr-[20px]  ml-[22px] w-[65px] h-[65px]' />

                </div>
            </div>
            <div className='flex w-full'>
                <div className=' bg-[#FC8A06] flex   max-w-[210px] w-full min-h-[77px]'>
                    <Image width={154} height={38} src={"/assets/icons/User.svg"} alt="" className=' ml-[30px] mt-[18px] w-[44px] h-[44px]' />
                    <h1 className="font-[Poppins]   mt-[30px] ml-[11px] items-center font-[600] text-[14px] leading-[100%] tracking-[0em]">Ayan</h1>

                </div>

                <div className='bg-[#028643] w-full flex  justify-center items-center'
                    onClick={() => { setIsOpen(true); console.log(isOpen) }}>
                    <Image
                        width={45}
                        height={45}
                        src={"/assets/icons/Shopping Basket1.svg"}
                        alt=""
                        className="  w-[43px] h-[43px] "
                    />
                    <p className=" font-[Poppins] ml-[17px] font-[600] text-[16px] leading-[100%] tracking-[0em] text-[#FFFFFF] ">
                        GBP 79.89
                    </p>
                </div>



            </div>
            <div className='flex items-center gap-x-[8px] justify-end mt-[14px] mr-[34px]'>
                <Image
                    width={25}
                    height={25}
                    src={"/assets/icons/Location.svg"}
                    alt=""
                    className=" w-[25px] h-[25px]"
                />
                <p className="font-[Poppins] font-[400] text-[14px] leading-[100%] tracking-[0em] ">
                    Lution Street, N4G-00....
                </p>
            </div>
            {isOpen && (

                <SmBasket onBasketClose={() => { setIsOpen(false) }} />
            )}


        </div>
    )
}
