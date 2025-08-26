




"use client"
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import MealDeals from '../popup/mealDeals';
import { MyContext } from '@/app/context/MyContext';



export default function PopUpBasket({ onBasketClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [opendeal, setopendeal] = useState(false)
  const { cart, setCart } = useContext(MyContext)



  const subTotal = calSubTotal(cart)

  function calSubTotal(cart) {
    console.log(cart)

    let sum = 0;
    cart.forEach((item) => {
      sum += item.Price ? Number(item.Price.toString().replace("£", "")) : 0

    });

    return sum;


  }

  function removeItemfromCart(id) {
    setCart((prev) => prev.filter((_, i) => i !== id))

  }




  return (<div  >

    {isOpen && !opendeal && (<div className=' sm:hidden xl:hidden 2xl:flex flex flex-col items-center '>
      <div className=' mb-[21px] bg-[#FC8A06]  w-full flex min-h-[125px] flex-row rounded-[12px] items-center justify-center'>
        <Image src="/assets/icons/Clock (1).svg" width={58} height={58} alt="" />
        <h1 className=' font-[Poppins] font-[600]  text-[18px]  leading-[66px] tracking-[0em] text-white'>Open until 3:00 am</h1>
      </div>


      <div onClick={(e) => e.stopPropagation()} className=' max-w-[378px]  bg-white  w-full border-[#BCBCBC] border-[1px] rounded-[12px] flex flex-col'>
        <div className='pl-[34px] pb-[48px] items-center flex gap-[20px] pt-[49px] bg-[#028643] rounded-t-[12px] '>
          <Image src="/assets/icons/FullShoppingBasket.svg" width={55} height={55} alt="" />
          <h1 className=' font-[Poppins] font-[600]  text-[32px]  leading-[100%] tracking-[0em] text-white'> My Basket</h1>
        </div>


        <div></div>
        {cart.map((item, id) => (<div key={id} className=' flex flex-row justify-center items-center  pt-[25px] border-b-[1px]  border-[#00000033]'>
          <button className=" w-[45px] h-[45px]  justify-center bg-[#FC8A06] rounded-full items-center  font-[Poppins] font-[700]  text-[24px]  leading-[100%] tracking-[0em]  text-white  flex ">1x</button>
          <div className=' ml-[27px] flex flex-col gap-y-[6px] max-w-[178px] mb-[24px]'>
            <h1 className=' font-[Poppins] font-[600]  text-[20px]  leading-[25px] tracking-[0em] text-[#028643]'>{item.Price}</h1>
            <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[100%] tracking-[0em]'>{item.Name}</h1>
            <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[18px] tracking-[0em] '>{item.Description}</h1>
          </div>

          <Image src="/assets/icons/Remove.svg" className='ml-[42px]' width={35} height={35} alt="" onClick={() => removeItemfromCart(id)} />

        </div>))}
        <div className='  pl-[27px] flex flex-col gap-y-[16px] mt-[34px] pb-[24px] border-b-[1px]  border-[#00000033]'>
          <div className=' flex flex-row justify-between  w-[320px]' >
            <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'>Sub Total:</p>
            <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>{`£ ${subTotal.toFixed(2)}`}</p>
          </div>
          <div className=' flex flex-row justify-between  w-[320px]' >
            <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'>Discounts:</p>
            <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>-3.00</p>
          </div><div className=' flex flex-row justify-between  w-[320px]' >
            <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'> Delivery:</p>
            <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>2.50</p>
          </div>
        </div>
        <div>
          <div className=' mx-[12px] flex flex-row  mt-[34px]  items-center justify-center  gap-x-[40px] rounded-[8px] min-w-[342px] min-h-[70px] bg-[#FC8A06CC]/80 '><h1 className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] text-white'>Total Pay</h1> <h1 className=' font-[Poppins] font-[600]  text-[36px]  leading-[25px] tracking-[0em] text-white'>{`£ ${subTotal.toFixed(2)}`}</h1></div>
          <div className='px-[12px] border-b-1 border-[#00000033]'>
            <div className="flex flex-row max-w-[342px]  max-h-[52px] mx-auto  mt-[21px] rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
              <input
                type="text"
                placeholder="Choose your free item.."
                className="px-4 py-3 text-[#000000CC]"
              />
            </div><div className="flex flex-row   mb-[37px] max-w-[342px] max-h-[52px] mx-auto  mt-[15px] rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
              <input
                type="text"
                placeholder="Apply Coupon Code here"
                className="px-4 py-3 text-[#000000CC]"
              />
            </div> </div>

          <div className=' min-w-[158px] min-h-[115px] flex flex-row gap-x-[12px]  items-center  justify-center mx-auto mt-[17px]' >
            <div className=' min-w-[158px] min-h-[115px] border-[1px] border-[#00000033]  rounded-[12px] flex  flex-col justify-center items-center'>
              <Image src="/assets/icons/Delivery Scooter.svg" width={35} height={35} alt="" />
              <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[25px] tracking-[0em] '>Delivery</h1>
              <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[25px] tracking-[0em] '>Start at 17:50</h1>
            </div>
            <div className=' w-[1px] h-[104px] bg-[#00000033]'></div>
            <div className=' min-w-[158px] min-h-[115px] border-[1px] border-[#00000033]  rounded-[12px] flex flex-col justify-center items-center'>
              <Image src="/assets/icons/Delivery Scooter.svg" width={35} height={35} alt="" />
              <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[25px] tracking-[0em] '>Delivery</h1>
              <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[25px] tracking-[0em] '>Start at 17:50</h1>
            </div>
          </div>



          <div onClick={() => {
            setIsOpen(false);
            setopendeal(true);
          }} className=' w-[342px] h-[70px] items-center  mb-[10px] mx-auto flex rounded-[8px] mt-[17px] bg-[#028643]'>

            <Image
              width={35}
              height={35}
              src="/assets/icons/ForwardButtonWhite.svg"
              alt=""
              className="  ml-[20px] rotate-270  "
            />

            <span className="   text-[24px]  leading-[100%] tracking-[0em] text-white font-[Poppins] font-[600] mx-auto  text-center">
              Checked!
            </span>
          </div>
          <div className=' justify-center  mx-auto flex items-center relative w-[342px] mb-[30px] bg-[#03081F] mt-[20px] rounded-[8px]'>
            <Image width={41} height={41} alt="" src="/assets/icons/Error.svg" className='absolute top-[-30px] left-[148px]' />
            <p className=' font-[Poppins] rounded-[8px] text-white text-center font-[600] text-[17px] leading-[120%] px-[19px] py-[22px]'>We are open now, but delivery starts at <span className='text-[#FC8A06]'>18:00</span>  however you may order and collect in store now</p>
          </div>



        </div>




      </div>

    </div>)}
    {opendeal && <MealDeals onClose={() => { setopendeal(false); setIsOpen(true); }} />}
  </div>

  )
}

