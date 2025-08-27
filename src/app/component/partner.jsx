import Image from "next/image";
import Header from "./header";
import NavBar from "@/app/component/NavBar";
import Banner from "@/app/component/banner2";
import Deals from "@/app/component/deals";
import Category from "@/app/component/category";
import Popular from "@/app/component/popularRest";

export default function Partner() {
  return (
    <div className="  sm:max-w-[calc(100vw_-_22px)] lg:max-w-[calc(100vw_-_22px)]  2xl:max-w-[1528px]  mx-auto w-full  justify-items-center grid lg:grid-cols-2 sm:grid-cols- gap-[19px] mt-[53px] ">
      <div
        style={{
          backgroundImage: 'url("/assets/icons/Partner.png")',
        }}
        className=" lg:max-w-[754px]  cursor-pointer sm:max-w-[391px] w-full lg:h-[425px] sm:min-h-[233px]  bg-cover bg-center relative lg:rounded-[12px] sm:rounded-[4px] overflow-hidden flex flex-col sm:gap-[74px]  lg:gap-[167px] "
      >
        {" "}
        <div className=" lg:max-w-[288px] sm:max-w-[199px] z-10 w-full lg:max-h-[63px] sm:max-h-[33px]  h-full bg-[#FFFFFF]  lg:rounded-b-[12px] sm:rounded-b-[4px]  lg:ml-[70px] sm:ml-[47px]  flex justify-center items-center">
          <h1 className="font-[poppins] font-[700] lg:text-[18px] sm:text-[13px] leading-[100%] tracking-[0%] ">
            Earn more with lower fees
          </h1>
        </div>
        <div className="  z-50 lg:ml-[70px] sm:ml-[36px]   h-full">
          <h1 className="font-[Poppins] font-[500] lg:text-[18px] sm:text-[16px]  leading-[150%] tracking-[0em] text-[#FC8A06]">
            Signup as a business
          </h1>
          <h1 className="font-[Poppins] font-[700] lg:text-[44px] sm:text-[24px] leading-[100%] tracking-[0em] text-[#FFFFFF]">
            Partner with us
          </h1>
          <button className=" sm:mt-[17.34px] cursor-pointer lg:mt-[36px] items-center lg:max-w-[205px] sm:max-w-[119px] w-full  lg:max-h-[52px] sm:max-h-[29px] h-full rounded-[120px]  bg-[#FC8A06] font-[Poppins] lg:font-[500] lg:text-[18px] leading-[100%] sm:font-[500] sm:text-[11px] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
        <div className="absolute lg:w-[754px] lg:h-[425px] sm:w-[391px] sm:h-[232px]  left-[0px] top-[0px] lg:rounded-[12px] sm:rounded-[4px] bg-[linear-gradient(245.7deg,_rgba(255,255,255,0)_0.94%,_rgba(3,8,31,0.19)_51.68%,_rgba(3,8,31,0.89)_87.9%)]"></div>
      </div>


      <div
        style={{
          backgroundImage: 'url("/assets/icons/RideWithus.png")',
        }}
        className=" lg:max-w-[754px]  cursor-pointer sm:max-w-[391px] w-full lg:h-[425px] sm:h-[233px]  bg-cover bg-center relative lg:rounded-[12px] sm:rounded-[4px] overflow-hidden flex flex-col sm:gap-[74px]  lg:gap-[167px] "
      >
        {" "}
        <div className=" lg:max-w-[288px] sm:max-w-[199px] z-10 w-full lg:max-h-[63px] sm:max-h-[33px]  h-full bg-[#FFFFFF]  lg:rounded-b-[12px] sm:rounded-b-[4px]  lg:ml-[70px] sm:ml-[47px]  flex justify-center items-center">
          <h1 className="font-[poppins] font-[700] lg:text-[18px] sm:text-[13px] leading-[100%] tracking-[0%] ">
            Avail exclusive perks
          </h1>
        </div>
        <div className="  z-50 lg:ml-[70px] sm:ml-[36px]  h-full">
          <h1 className="font-[Poppins] font-[500] lg:text-[18px] sm:text-[16px] leading-[150%] tracking-[0em] text-[#FC8A06]">
            Signup as a rider
          </h1>
          <h1 className="font-[Poppins] font-[700] lg:text-[44px] sm:text-[24px]   leading-[100%] tracking-[0em] text-[#FFFFFF]">
            Ride with us
          </h1>
          <button className=" sm:mt-[17.34px] cursor-pointer lg:mt-[36px] items-center lg:max-w-[205px] sm:max-w-[119px] w-full  lg:max-h-[52px] sm:max-h-[29px] h-full rounded-[120px]  leading-[100%] bg-[#FC8A06] font-[Poppins] font-[500] lg:text-[18px] sm:font-[500] sm:text-[11px] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
        <div className="absolute  lg:w-[754px] lg:h-[425px] sm:w-[391px] sm:h-[232px]  left-[0px] top-[0px] lg:rounded-[12px] sm:rounded-[4px] bg-[linear-gradient(245.7deg,_rgba(255,255,255,0)_0.94%,_rgba(3,8,31,0.19)_51.68%,_rgba(3,8,31,0.89)_87.9%)]"></div>

      </div>
    </div>
  );
}
