import React from 'react'

export default function Footer() {
  return (
      <div className='max-w-[1728px] w-full'>
          <div  className=' bg-[#D9D9D9]'></div>
          <div className='bg-[#03081F] flex flex-row   justify-between  min-h-[75px] items-center'>
              <h1 className=' ml-[116px] font-[Poppins] font-[400] text-[15px] leading-[100%] tracking-[0em] text-[#FFFFFF]'>Order.uk Copyright 2024, All Rights Reserved.</h1>
               <div className=" mr-[100px] max-w-[655px] w-full flex justify-between">
                   {["Privacy","Policy", "Terms","Pricing"," Do not sell or share my personal information"].map((option) => (
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
  )
}
