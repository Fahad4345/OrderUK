"use client"
import React, { useState, useContext } from 'react'
import Image from 'next/image';
import { MyContext } from "../../context/MyContext";
import { restaurants } from '../../lib/restaurants';

export default function MidTile() {
  const { index, selectedCategory, setIndex } = useContext(MyContext);
  const [size, setSize] = useState("Small")
  const menuItems = [
    {
      name: "Farm House Xtreme Pizza",
      spiceLevel: 2,
      description: [
        "1 McChicken™",
        "1 Big Mac™",
        "1 Royal Cheeseburger",
        "3 medium sized French Fries",
        "3 cold drinks"
      ],
      sizes: [
        { label: "Small", price: 21.90, currency: "£", isSelected: true },
        { label: "Medium", price: 25.90, currency: "£", isSelected: false },
        { label: "Large", price: 27.90, currency: "£", isSelected: false },
        { label: "XL Large with Sauces", price: 32.90, currency: "£", isSelected: false }
      ],
      image: "/path/to/pizza-image.png"
    }
  ];

  return (
    <div className=' max-w-[754px] '>
      <div className="  justify-between flex max-w-[754px] ">
        <h1 className="font-[Poppins] ml-[32px] font-[600] text-[32px] leading-[100%] tracking-[0em] text-[#03081F]">{selectedCategory}
        </h1>
        <div className="flex flex-row w-[274px] mr-[19px]  rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Sort by Pricing"
            className="px-4 py-3 text-[#000000CC]"
          />  <Image src="/assets/icons/Forward Button (1).svg" className=" rotate-y-180 opacity-[40%]" width={30} height={30} alt="" />

        </div>
      </div>
      {restaurants[index].menu[selectedCategory].map((item, id) => (<div key={id} className='shadow-[5px_5px_34px_0px_#00000040] rounded-[8px] mt-[45px] '>

        <div className='py-[28px] px-[32px]'>
          <div className=' flex justify-between  gap-x-[189px]'>
            <div>
              <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[100%] tracking-[0em] text-[#03081F]">{item.name}</h1>
              <h1 className="font-[Poppins] mt-[55px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>
            </div>
            <div className=' rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
          </div>
        </div>

        <div className=' flex flex-wrap  gap-x-[6px] gap-y-[19px] flex-row pb-[28px] px-[32px]'>
          {item.sizes.map((s, id) => (
            <div key={id} onClick={() => setSize(s.label)} className={`flex flex-row   py-[10px] px-[8px]  gap-x-[21px] items-center rounded-[4px] border-[1px] border-[#03081F] ${s.label === size ? "bg-[#03081F]" : ""}`}>
              <div className='flex justify-center items-center'> <h1 className={`font-[Poppins] font-[700] text-[14px] leading-[25px] tracking-[0em] ${s.label === size ? "text-white" : "text-[#03081F]"
                }`}>{s.label}</h1></div>
              <div className='  min-h-[39px] min-w-[90px] bg-[#028643] flex justify-center items-center'><h1 className="font-[Poppins]  font-[700] text-[14px] leading-[25px] tracking-[0em] text-[#FFFFFF] ">{s.price}</h1></div>
            </div >
          ))}

        </div>
      </div>

      ))}


    </div>

  )
}
