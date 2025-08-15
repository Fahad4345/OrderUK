import React from "react";

export default function CountBar() {
  return (
    <div className=" max-w-[1528px] rounded-[12px] min-h-[158px] h-full w-full mx-auto bg-[#FC8A06] mt-[44px] mb-[45px] flex flex-row items-center justify-center">
      <div className="mx-auto  flex flex-col mt-[20px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[Poppins] leading-[38px] tracking-[0em] text-center">
          0+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          Registered Riders
        </p>
      </div>
      <div className="w-[1px] h-[100px] bg-[#D9D9D9]"> </div>
      <div className="mx-auto  flex flex-col mt-[20px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          789,000+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          Order Delivered
        </p>
      </div>
      <div className="w-[1px] h-[100px] bg-[#D9D9D9]"> </div>
      <div className="mx-auto  flex flex-col mt-[20px] gap-[13px] item-center  max-h-[90px] h-full">
        <h1 className="font-[300] text-white text-[64px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          690+
        </h1>
        <p className="font-[700]  text-white text-[24px] font-[poppins] leading-[38px] tracking-[0em] text-center">
          Restaurants Partners
        </p>
      </div>
      <div className="w-[1px] h-[100px] bg-[rgb(217,217,217)]"> </div>
      <div className="mx-auto  flex flex-col mt-[20px] gap-[13px] item-center  max-h-[90px] h-full">
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
