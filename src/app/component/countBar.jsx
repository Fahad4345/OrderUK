import React from "react";

export default function CountBar() {
  return (
    <div className=" lg:max-w-[1528px] sm:max-w-[432px] mx-auto rounded-[12px] min-h-[158px]   bg-[#FC8A06] mt-[44px] mb-[45px] flex lg:flex-row sm:flex-col items-center justify-center">
      <div className="mx-auto  flex flex-col lg:mt-[20px] sm:mt-[84px]  lg:mb-[24px] sm:mb-[36px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[Poppins] leading-[38px] tracking-[0em] text-center">
          0+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          Registered Riders
        </p>
      </div>
      <div className="h-[1px]   lg:rotate-90 lg:w-[100px] sm:w-[194px] bg-[#D9D9D9]"> </div>
      <div className="mx-auto  flex flex-col  lg:mt-[20px] sm:mt-[84px]  lg:mb-[24px] sm:mb-[36px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          789,000+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          Order Delivered
        </p>
      </div>
      <div className="h-[1px]   lg:rotate-90 lg:w-[100px] sm:w-[194px] bg-[#D9D9D9]"> </div>
      <div className="mx-auto  flex flex-col  lg:mt-[20px] sm:mt-[84px]  lg:mb-[24px] sm:mb-[36px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          690+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          Restaurants Partners
        </p>
      </div>
      <div className="h-[1px]   lg:rotate-90 lg:w-[100px] sm:w-[194px] bg-[#D9D9D9]"> </div>
      <div className="mx-auto  flex flex-col  lg:mt-[20px] sm:mt-[84px]  lg:mb-[24px] sm:mb-[36px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[Poppins] leading-[38px] tracking-[0em] text-center">
          17,457+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[Poppins] leading-[38px] tracking-[0em] text-center">
          Food Item
        </p>
      </div>
    </div>
  );
}
