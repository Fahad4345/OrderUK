"use client";
import Image from "next/image";
import Header from "./header";
import NavBar from "@/app/component/NavBar";
import Banner from "@/app/component/banner2";
import Deals from "@/app/component/deals";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../context/MyContext.jsx";

export default function Popular({heading}) {
  const { setRestname } = useContext(MyContext);

  let popular = [
    {
      category: " McDonald's",

      imagepath: "/assets/icons/McDonald.png",
    },
    {
      category: "Papa Johns",

      imagepath: "/assets/icons/PapaJohn.png",
    },
    {
      category: " KFC West London",

      imagepath: "/assets/icons/Kfc.png",
    },
    {
      category: " Texas Chicken",

      imagepath: "/assets/icons/Texas.png",
    },
    {
      category: "Burger King",

      imagepath: "/assets/icons/BurgerKing.png",
    },
    {
      category: "Shaurma 1",

      imagepath: "/assets/icons/Shaurma.png",
    },
  ];
  return (
    <div className=" max-w-[1528px]  mt-[63px] w-full mx-auto flex flex-col">
      <div>         
        <h1 className=" font-[Poppins] font-[700] text-[32px] leading-[100%] tracking-[0%] text-[#000000]">
          {heading} 
        </h1>
      </div>

      <div className=" flex flex-row gap-[20px] mt-[51px]">
        {popular.map((populars, index) => (
          <Link
            key={index}
            href="/pages/restaurantDetail"
            onClick={() => setRestname(populars.category)}
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
                  src={populars.imagepath}
                  alt=""
                  className="w-[238px] h-[203px] bg-cover bg-center"
                />
              </div>
              <div className=" bg-[#FC8A06]  items-center justify-center py-[18px]">
                <h1 className="font-[Poppins] font-[700] text-[18px]  items-center flex justify-center leading-[100%] tracking-[0%] text-white">
                  {populars.category}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
