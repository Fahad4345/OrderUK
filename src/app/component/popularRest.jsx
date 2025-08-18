"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../context/MyContext.jsx";
import { restaurants } from './restaurants';


export default function Popular({ heading }) {
  const { index, setIndex } = useContext(MyContext);



  return (
    <div className=" max-w-[1528px]  mt-[63px] w-full mx-auto flex flex-col">
      <div>
        <h1 className=" font-[Poppins] font-[700] text-[32px] leading-[100%] tracking-[0%] text-[#000000]">
          {heading}
        </h1>
      </div>

      <div className=" flex flex-row gap-[20px] mt-[51px]">
        {restaurants.map((rest, index) => (
          <Link
            key={index}
            href="/pages/restaurantDetail"
            onClick={() => setIndex(index)}
          >
            {" "}
            <div
              key={index}
              className=" border-b-[1px]  border-[#0000001A] flex flex-col max-w-[238px] w-full bg-cover bg-center relative rounded-[12px] overflow-hidden "
            >
              <div>
                <Image
                  width={720}
                  height={600}
                  src={rest.image}
                  alt=""
                  className="w-[238px] h-[203px] bg-cover bg-center"
                />
              </div>
              <div className=" bg-[#FC8A06]  items-center justify-center py-[18px]">
                <h1 className="font-[Poppins] font-[700] text-[18px]  items-center flex justify-center leading-[100%] tracking-[0%] text-white">
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
