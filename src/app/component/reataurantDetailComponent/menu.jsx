"use client"
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MyContext } from "../../context/MyContext";
import { restaurants } from '../../lib/restaurants';
import Menupopup from "../popup/menupopup";

export default function Menu() {
  const { index, setIndex, cart, setCart } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {

    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));

  }, [])
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))


  }, [cart])

  function addtoCart(items) {
    const itemWithRestName = {
      items, restaurants: restaurants[index].name
    };


    setCart((Prev) => [...Prev, itemWithRestName])


  }




  return (
    <div className=" sm:max-w-[calc(100vw_-_22px)] lg:max-w-[1528px]  mx-auto flex flex-col flex-wrap">
      {Object.keys(restaurants[index].menu).map((category, catindex) => (
        <div
          className=" flex flex-wrap gap-[40px]  max-w-[1528px] w-full mx-auto  "
          key={catindex}
        >
          <Link rel="stylesheet" href="/pages/order"> <h1

            className={`font-[Poppins] 
                     ${category === "Burger" ? "mt-[71px]  text-black" : ""}
                     ${category === "Fries" ? "mt-[124px]" : ""}
                     ${category === "ColdDrink" ? "mt-[119px]" : ""}
                     ${category === "Pizza" ? "mt-[119px]" : ""}
                     font-[700] text-[44px] leading-[100px] tracking-[0em] text-[#FC8A06]`}
          >
            {category}
          </h1></Link>
          <div className="  flex flex-wrap flex-row  sm:justify-center items-center gap-y-[40px] gap-x-[20px]">
            {restaurants[index].menu[category].map((items, idx) => (
              <div key={idx}

                className=" flex-row flex    items-center max-w-[496px] w-full  max-h-[245px] rounded-[12px] h-full shadow-[5px_5px_34px_0px_rgba(0,0,0,0.25)] px-[25px] py-[25px] "
              >
                <div className="flex flex-col gap-[10px] max-w-[220px] w-full">
                  <h1 className="font-[Poppins] font-[600] text-[20px] leading-[23px] tracking-[0em] text-[#000000]">
                    {items.name}
                  </h1>
                  <h1 className="font-[Poppins] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#000000]">
                    {items.description}
                  </h1>

                  <h1 className="font-[Poppins] font-[700] text-[18px] leading-[100%] tracking-[0em] text-[#000000]">  {items.sizes[0].price}</h1>


                </div>
                <div className=" relative">
                  <Image
                    width={232}
                    height={199}
                    src="/assets/icons/burger.png"
                    alt=""
                    className=" w-[232px] h-[199px]"
                  />
                  <div className="absolute flex justify-center item-center w-[97px] h-[89px] right-[0px] bottom-[-1px] z-50 bg-[#FFFFFF]/90 rounded-tl-[46px]"
                    onClick={() => {
                      addtoCart(items);
                      setIsOpen(true);
                    }}>
                    <Image
                      width={49}
                      height={49}
                      src="/assets/icons/Plus.svg"
                      alt=""
                    />
                  </div>
                </div>
                {isOpen && (

                  <Menupopup itemid={idx} catid={catindex} onBasketClose={() => { setIsOpen(false) }} />
                )}
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}
