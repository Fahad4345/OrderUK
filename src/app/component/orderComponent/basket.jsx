"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function  Basket() {
    const [selectedCategory, setCategory] = useState("Pizza");
    const item = [{ Price:"£27.90", type:"12” Vegitarian Pizza " , message:"No Mushrooms + green peppers"},{ Price:"£27.90", type:"12” Vegitarian Pizza " , message:"No Mushrooms + green peppers"}]
  return (
      <div className=' max-w-[378px] min-h-[1078px]   w-full border-[#BCBCBC] border-[1px]  bg-[#F9F9F9] rounded-[12px] flex flex-col'>
          <div className='pl-[34px] pb-[48px] items-center flex gap-[20px] pt-[49px] bg-[#028643] rounded-t-[12px] '>
              <Image  src="/assets/icons/Full shopping Basket.svg" width={ 55 } height={ 55 } alt="" />
              <h1 className=' font-[Poppins] font-[600]  text-[32px]  leading-[100%] tracking-[0em] text-white'> My Basket</h1>
          </div> 
         {item.map((items, id) => ( <div key={id} className=' flex flex-row justify-center items-center  pt-[25px] border-b-[1px]  border-[#00000033]'>
                 <button className=" w-[45px] h-[45px]  justify-center bg-[#FC8A06] rounded-full items-center  font-[Poppins] font-[700]  text-[24px]  leading-[100%] tracking-[0em]  text-white  flex ">1x</button>
              <div className=' ml-[27px] flex flex-col gap-y-[6px] max-w-[178px] mb-[24px]'>
                  <h1 className=' font-[Poppins] font-[600]  text-[20px]  leading-[25px] tracking-[0em] text-[#028643]'>{items.Price}</h1>
                  <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[100%] tracking-[0em]'>{items.type}</h1>
                  <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[18px] tracking-[0em] '>{items.message}</h1>
              </div>
              
                 <Image src="/assets/icons/Remove.svg" className='ml-[42px]' width={35} height={35} alt="" />
              
         </div>))}
           <div className=' pl-[27px] flex flex-col gap-y-[16px] mt-[34px] pb-[24px] border-b-[1px]  border-[#00000033]'>
              <div className=' flex flex-row justify-between  w-[320px]' >
                  <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'>Sub Total:</p>
                  <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>£127.90</p>
              </div>
                 <div className=' flex flex-row justify-between  w-[320px]' >
                  <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'>Discounts:</p>
                  <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>-3.00</p>
              </div><div className=' flex flex-row justify-between  w-[320px]' >
                  <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'> Delivery:</p>
                  <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>2.50</p>
              </div>
          </div>
           <div className=' flex flex-row  mt-[34px] mx-auto items-center justify-center  gap-x-[40px] rounded-[8px] min-w-[342px] h-[70px] bg-[#FC8A06CC]/80 '><h1 className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] text-white'>Total Pay</h1> <h1 className=' font-[Poppins] font-[600]  text-[36px]  leading-[25px] tracking-[0em] text-white'>£127.90</h1></div>
          <div className=' border-b-1 border-[#00000033]'>
          <div className="flex flex-row max-w-[342px]  max-h-[52px] mx-auto  mt-[21px] rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Choose your free item.."
            className="px-4 py-3 text-[#000000CC]"
          />
        </div><div  className="flex flex-row   mb-[37px] max-w-[342px] max-h-[52px] mx-auto  mt-[15px] rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Apply Coupon Code here"
            className="px-4 py-3 text-[#000000CC]"
          />
          </div> </div> 
          <div className=' min-w-[158px] min-h-[115px] flex flex-row gap-x-[12px]  items-center  justify-center mx-auto mt-[17px]' >
              <div className=' min-w-[158px] min-h-[115px] bg-[#EEEEEE] border-[1px] border-[#00000033]  rounded-[12px] flex  flex-col justify-center items-center'>
                   <Image  src="/assets/icons/Delivery Scooter.svg" width={35} height={ 35 } alt="" />
                  <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[25px] tracking-[0em] '>Delivery</h1>
                  <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[25px] tracking-[0em] '>Start at 17:50</h1>
              </div>
              <div className=' w-[1px] h-[104px] bg-[#00000033]'></div>
              <div className=' min-w-[158px] min-h-[115px] bg-[#EEEEEE] border-[1px] border-[#00000033]  rounded-[12px] flex flex-col justify-center items-center'>
                   <Image  src="/assets/icons/Delivery Scooter.svg" width={35} height={ 35 } alt="" />
                  <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[25px] tracking-[0em] '>Delivery</h1>
                  <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[25px] tracking-[0em] '>Start at 17:50</h1>
              </div>
          </div>
          <div className='items-center max-w-[342px]  mx-auto flex rounded-[8px] mt-[17px] bg-[#028643]'>
            
              <h1 className=' font-[Poppins] font-[600] py-[16px] px-[107px] text-[24px]  leading-[100%] tracking-[0em] text-white'>Checkout!</h1>
          </div> 
         
      
    </div>
  )
}
