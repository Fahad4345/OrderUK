import React from 'react'
import { FaApple } from "react-icons/fa";
import AppleIcon from './appleIcon';


export default function Button({ className }) {
  return (
    <div className=''> <div className={` items-center flex flex-row${className}`}>
      <button>
        <div className="flex lg:min-w-[206px]  sm:min-w-[140px] w-full items-center gap-3 bg-black text-white lg:px-4 lg:py-2 sm:px-2 sm:py-1 border-[2px] border-[#A6A6A6] rounded-xl">
          <FaApple className="text-[20px] lg:text-[40px]" />
          <div className=" leading-tight cursor-pointer">
            <h1 className=" block  font-[poppins] text-xs">
              Download on the{" "}
            </h1>
            <h1 className=" block font-[poppins]  lg:text-xl   sm:text-md font-semibold">
              App Store
            </h1>
          </div>
        </div>
      </button>
      <button>
        <div className="flex lg:min-w-[206px] cursor-pointer sm:min-w-[140px] w-full items-center gap-3 bg-black text-white lg:px-4 lg:py-2 sm:px-2 sm:py-1 border-[2px] border-[#A6A6A6] rounded-xl">
          <AppleIcon classname="lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px]" />
          <div className="leading-tight flex flex-col items-start">
            <span className="text-xs font-[poppins]">GET IT ON</span>
            <span className="lg:text-xl   sm:text-md font-[poppins] font-semibold">
              Google Play
            </span>
          </div>
        </div>
      </button>
    </div>

    </div>
  )
}
