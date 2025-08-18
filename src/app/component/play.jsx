import React from 'react'
import { FaApple } from "react-icons/fa";
import AppleIcon from './appleIcon';


export default function Button({ className }) {
  return (
    <div className=''> <div className={` items-center flex flex-row${className}`}>
      <button>
        <div className="flex min-w-[206px] w-full items-center gap-3 bg-black text-white px-4 py-2 border-[2px] border-[#A6A6A6] rounded-xl">
          <FaApple size={40} />
          <div className=" leading-tight">
            <h1 className=" block  font-[poppins] text-xs">
              Download on the{" "}
            </h1>
            <h1 className=" block font-[poppins] text-xl font-semibold">
              App Store
            </h1>
          </div>
        </div>
      </button>
      <button>
        <div className="flex min-w-[203px] w-full items-center gap-3 bg-black text-white px-4 py-2 border-[2px] border-[#A6A6A6] rounded-xl">
          <AppleIcon classname="w-[30px] h-[30px]" />
          <div className="leading-tight flex flex-col items-start">
            <span className="text-xs font-[poppins]">GET IT ON</span>
            <span className="text-xl  font-[poppins] font-semibold">
              Google Play
            </span>
          </div>
        </div>
      </button>
    </div>

    </div>
  )
}
