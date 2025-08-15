"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function Leftmenu() {
    const [selectedCategory, setCategory] = useState("Pizza");
     const menu=["Pizza", "Burger" ,"Cold Drink"]
  return (
      <div className=' max-w-[378px] min-h-[1078px] w-full border-[#BCBCBC]  bg-[#FBFBFB] border-[1px]  rounded-[12px] flex flex-col'>
          <div className='ml-[34px] mb-[48px] items-center flex gap-[20px] mt-[49px]'>
              <Image  src="/assets/icons/Menu.svg" width={ 55 } height={ 55 } alt="" />
              <h1 className=' font-[Poppins] fonty-[600]  text-[32px]  leading-[100%] tracking-[0em] '>Menu</h1>
          </div> 
          {menu.map((category, index) => (
              <div key={index} className={`  ${category === selectedCategory ? " bg-[#03081F]  text-white":""}`} onClick={ ()=> setCategory(category)}>
              <h1 className='font-[Poppins] ml-[34px]  font-[700] text-[22px] leading-[83px] tracking-[0em]'>{category}</h1>
              
         </div>
             
         ))} 
      
    </div>
  )
}
