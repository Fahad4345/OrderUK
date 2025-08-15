import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Button from "./play";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

export default function NavBar() {
  return (
    <div className=" max-w-[1528px] w-full mx-auto mt-[38px] flex flex-row  items-center">
          <Image width={25} height={25} src={"/assets/icons/LOGO 1.svg"} alt="" className=' w-[215px] h-[53px]' />
          <div className="ml-[202px] mr-[79.38px]  max-w-[824px] w-full flex  justify-between">
              <button className='font-[Poppins] font-[500px] text-[18px] leading-[100%] tracking-[0%]'>Home</button>
              <button className='font-[Poppins] font-[500px] text-[18px] leading-[100%] tracking-[0%]'>Browser Menu</button>
              <button className='font-[Poppins] font-[500px] text-[18px] leading-[100%] tracking-[0%]'>Special Offer</button>
              <button className='font-[Poppins] font-[500px] text-[18px] leading-[100%] tracking-[0%]'>Restaurants</button>
              <button className='font-[Poppins] font-[500px] text-[18px] leading-[100%] tracking-[0%]'>Track Order</button>
      </div>
      <div className="max-w-[231px] w-full px-[26.38px] py-[17px]  bg-[#03081F] rounded-[120px] items-center">
        <button className=' max-w-[181.24px] w-full cursor-pointer gap-[11.47px] font-[Poppins] font-[500px] text-[#FFFFFF] flex flex-row text-[18px] leading-[100%] tracking-[0%] items-center'>
              <Image width={30.97} height={27} src={"/assets/icons/Male User.svg"} alt="" className=' w-[30.97px] h-[27px]' />
             Login/Signup </button>
      </div>
   
          
    </div>
  );
}
