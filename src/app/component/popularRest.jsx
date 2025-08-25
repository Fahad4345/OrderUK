"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../context/MyContext.jsx";
import { restaurants } from '../lib/restaurants.js';


export default function Popular({ heading }) {
  const { index, setIndex } = useContext(MyContext);



  return (
    <div className=" sm:max-w-[calc(100vw_-_22px)] lg:max-w-[1528px] mt-[63px] w-full mx-auto flex flex-col">
      <div>
        <h1 className=" font-[Poppins] font-[700] lg:text-[32px] sm:text-[16px] leading-[100%] tracking-[0%] text-[#000000]">
          {heading}
        </h1>
      </div>

      <div className=" flex flex-row lg:gap-[20px] sm:gap-[9px] mt-[51px] sm:min-h-[156px]  overflow-x-auto ">
        {restaurants.map((rest, id) => (
          <Link
            key={id}
            href="/pages/restaurantDetail"
            onClick={() => { setIndex(id); console.log(index) }}
          >
            {" "}
            <div

              className=" border-b-[1px]  border-[#0000001A] flex flex-col lg:w-[238px] lg:h-[266px]  sm:w-[122px] sm:h-[156px]  w-full bg-cover bg-center relative rounded-[12px] overflow-hidden "
            >
              <div>
                <Image
                  width={720}
                  height={600}
                  src={rest.image}
                  alt=""
                  className="lg:w-[238px] lg:h-[203px] sm:w-[121.68px] sm:h-[103.79px] bg-cover bg-center"
                />
              </div>
              <div className=" bg-[#FC8A06] w-full h-full flex  items-center justify-center px-[10px] ">
                <h1 className="font-[Poppins] text-center font-[700] lg:text-[18px] lg:leading-[100%] sm:text-[13px] sm:leading-[16px] items-center flex justify-center  tracking-[0%] text-white">
                  {rest.name}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
