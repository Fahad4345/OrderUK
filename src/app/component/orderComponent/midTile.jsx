"use client"
import React, { useState, useContext } from 'react'
import { toast } from "react-hot-toast";


import Image from 'next/image';
import { MyContext } from "../../context/MyContext";
import { restaurants } from '../../lib/restaurants';

export default function MidTile() {
  const { index, setIndex, cart, setCart, selectedCategory } = useContext(MyContext);
  const [size, setSize] = useState("Small");
  const [price, setPrice] = useState("£5.99");
  const max = 5;
  const SpiceLevel = 2;


  function addtoCart(items) {
    const itemWithRestName = {
      name: items.name, restaurant: restaurants[index].name, description: items.description, size: size, price: price
    };
    console.log(price)
    setCart((Prev) => {

      const existing = Prev.find(
        (i) => i.name === itemWithRestName.name && i.size === itemWithRestName.size
      );

      if (existing) {

        return Prev.map((i) =>
          i.name === itemWithRestName.name && i.size === itemWithRestName.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {

        return [...Prev, { ...itemWithRestName, quantity: 1 }];
      }
    });



  }

  return (
    <div className='sm:max-w-[calc(100vw_-_22px)] lg:min-w-[754px]  '>
      <div className="  justify-between flex sm:max-w-[calc(100vw_-_22px)] lg:max-w-[754px] max-w-[754px] ">
        <h1 className="font-[Poppins] cursor-pointer lg:ml-[32px] font-[600] text-[32px] leading-[100%] tracking-[0em] text-[#03081F]">{selectedCategory}
        </h1>
        <div className=" px-4 py-3 flex flex-row lg:w-[274px]  justify-between sm:w-[207px] lg:mr-[19px]  rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
          <input
            type="text"
            placeholder="Sort by Pricing"
            className=" lg:w-[274px] cursor-pointer sm:w-[114px] text-[#000000CC] focus:outline-none focus:ring-0 focus:border-transparent"
          />  <Image src="/assets/icons/Forward Button (1).svg" className=" rotate-y-180 " width={30} height={30} alt="" />

        </div>
      </div>
      <div className='items-center flex justify-between gap-[20px] mt-[49px] sm:flex lg:hidden rounded-[12px]  px-[20px] py-[12px] border-[1px] border-[#0000004D]'>
        <div className='flex flex-row items-center'>
          <Image src="/assets/icons/Menu.svg" width={55} height={55} alt="" />
          <h1 className='  ml-[20px] font-[Poppins] fonty-[600]  text-[32px]  leading-[100%] tracking-[0em] '>Menu</h1>
        </div>
        <div className='flex flex-row items-center'>
          <h1 className=' font-[Poppins] font-[400]  mr-[34px] text-[16px]  leading-[100%] tracking-[0em] '>{selectedCategory}</h1>
          <Image src="/assets/icons/Forward Button (1).svg" width={30} height={30} alt="" />
        </div>

      </div>
      {restaurants[index].menu[selectedCategory].map((item, id) => (<div key={id}>

        <div className=' lg:py-[28px] sm:py-[33px] lg:px-[32px] sm:px-[12px] shadow-[5px_5px_34px_0px_#00000040] rounded-[8px] mt-[31px] '>

          <div className='sm:hidden lg:flex '>
            <div className=' flex justify-between  w-full'>
              <div className=''>
                <div className='flex flex-col'>
                  <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
                  <div className="flex items-center">
                    {[...Array(max)].map((_, i) => (
                      <Image
                        key={i}
                        src={i < SpiceLevel ? "/assets/icons/redchilli.svg" : "/assets/icons/greychilli.svg"}
                        alt=""
                        width={720}
                        height={600}
                        className="w-[20px] cursor-pointer h-[20px]"
                      />
                    ))}
                  </div>

                </div>

                <h1 className="font-[Poppins] mt-[27.96px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>
              </div>
              <div className=' cursor-pointer rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
            </div>
          </div>

          <div className='sm:flex lg:hidden flex-col '>
            <div className=' flex justify-between '>
              <div className=''>
                <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
                <div className="flex items-center">
                  {[...Array(max)].map((_, i) => (
                    <Image
                      key={i}
                      src={i < SpiceLevel ? "/assets/icons/redChilli.svg" : "/assets/icons/greyChilli.svg"}
                      alt=""
                      width={720}
                      height={600}
                      className="w-[20px] h-[20px] cursor-pointer"
                    />
                  ))}
                </div>
                <h1 className="font-[Poppins] mt-[19px] mb-[19px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>

              </div>
              <div className='cursor-pointer rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
            </div>
          </div>
          <div className=' flex flex-row w-full  gap-[20px] items-end justify-between  mt-[31px]'>
            <div className=' flex   w-fit flex-wrap  gap-x-[6px] gap-y-[19px] flex-row  mt-[31px]  '>
              {item.sizes.map((s, id) => (
                <div key={id} onClick={() => { setSize(s.label); setPrice(s.price); }} className={`flex  cursor-pointer flex-row  h-fit  py-[10px] px-[8px]  gap-x-[21px] items-center rounded-[4px] border-[1px] border-[#03081F] ${s.label === size ? "bg-[#03081F]" : ""}`}>
                  <div className='flex justify-center items-center'> <h1 className={`font-[Poppins] font-[700] text-[14px] leading-[25px] tracking-[0em] ${s.label === size ? "text-white" : "text-[#03081F]"
                    }`}>{s.label}</h1></div>
                  <div className='  min-h-[39px] min-w-[90px] bg-[#028643] flex justify-center items-center'><h1 className="font-[Poppins]  font-[700] text-[14px] leading-[25px] tracking-[0em] text-[#FFFFFF] ">{s.price}</h1></div>
                </div >
              ))}


            </div>
            <div className=" flex justify-center  item-center cursor-pointer w-[100px] h-[100px] z-50  bg-amber-500 rounded-tl-[46px] rounded-br-[46px]"

              onClick={() => {
                addtoCart(item);
                toast.success("Added to your Cart", {
                  icon: '👏',
                  style: {
                    fontFamily: "Poppins",
                    fontSize: "18px",

                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                })
              }}
            >
              <Image
                width={49}
                height={49}
                src="/assets/icons/Plus.svg"
                alt=""
              />
            </div>
          </div>



        </div>

      </div>




      ))
      }
      <div

        style={{
          backgroundImage: ` linear-gradient(245.7deg, rgba(255, 255, 255, 0) 0.94%, rgba(3, 8, 31, 0.19) 51.68%, rgba(3, 8, 31, 0.89) 87.9%),
                          url('/assets/icons/Rectangle8.png')` }}
        className=" relative mt-[27px] sm:max-w-[388px] sm:min-h-[325px]  mx-auto  sm:flex xl:flex 2xl:hidden bg-cover bg-center  rounded-[12px] flex flex-col   "
      >
        {" "}
        <div className="   z-50 lg:w-[88px] sm:w-[68.84px] lg:ml-[22px] sm:ml-[23.26px]  lg:h-[66px] sm:h-[66px] h-full bg-[#03081F]   lg:rounded-b-[12px] sm:rounded-b-[4px] lg:mr-[20px] sm:mr-[16px]  flex justify-center items-center">
          <h1 className="font-[Poppins] font-[700] lg:text-[18px] sm:text-[15px] leading-[100%] tracking-[0em] text-white">
            20%
          </h1>
        </div>
        <div className="  mt-[170px] flex flex-col  lg:flex  ml-[22px] mb-[26px] ">
          <h1 className="font-[Poppins] font-[500] text-[18px] leading-[200%] tracking-[0em] text-[#FC8A06]">
            Special offer
          </h1>
          <h1 className="font-[Poppins] font-[700] text-[24px] leading-[150%] tracking-[0em]  text-[#FFFFFF]">
            First Order Discount
          </h1>
        </div>
        <div className="absolute flex justify-center cursor-pointer item-center w-[75px] h-[89px] right-[0px] bottom-[-1px] z-50 bg-[#FFFFFF]/90 rounded-tl-[46px]"
        >
          <Image
            width={36.26}
            height={49}
            src="/assets/icons/Plus.svg"
            alt=""
          />
        </div>

      </div>


    </div >

  )
}
