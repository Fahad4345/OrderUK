import Image from "next/image";
import Header from "../component/header";
import NavBar from "@/component/NavBar";
import Banner from "@/component/banner";
import Deals from "@/component/deals";
import Category from "@/component/category";
import Popular from "@/component/popularRest";

export default function Partner() {
  return (
    <div className=" max-w-[1528px] w-full mx-auto grid grid-cols-2 gap-[19px] mt-[53px] mb-[63px]">
      <div
        style={{
          backgroundImage: 'url("/assets/icons/Partner.png")',
        }}
        className=" max-w-[754px] w-full h-[425px]  bg-cover bg-center relative rounded-[12px] overflow-hidden flex flex-col   gap-[160px] "
      >
        {" "}
        <div className=" max-w-[288px] z-10 w-full max-h-[63px]  h-full bg-[#FFFFFF]  rounded-b-[12px]  ml-[70px]  flex justify-center items-center">
          <h1 className="font-[Poppins] font-[700px] text-[18px] leading-[100%] tracking-[0%] ">
            Earn more with lower fees
          </h1>
        </div>
        <div className="  z-50 ml-[70px] mb-[39px]">
          <h1 className="font-[Poppins] font-[500px] text-[18px] tracking-[0%] text-[#FC8A06]">
            Signup as a business
          </h1>
          <h1 className="font-[Poppins] font-[700px] text-[44px]  tracking-[0%] text-[#FFFFFF]">
            Partner with us
          </h1>
          <button className=" mt-[35px] items-center max-w-[205px] w-full  max-h-[52px] h-full rounded-[120px]  bg-[#FC8A06] font-[Poppins] font-[700] text-[16px] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
        <div className="absolute w-[754px] h-[425px]  left-[0px] top-[0px] rounded-[12px] bg-[linear-gradient(245.7deg,_rgba(255,255,255,0)_0.94%,_rgba(3,8,31,0.19)_51.68%,_rgba(3,8,31,0.89)_87.9%)]"></div>
          </div>
           <div
        style={{
          backgroundImage: 'url("/assets/icons/RideWithus.png")',
        }}
        className=" max-w-[754px] w-full max-h-[425px] h-full   bg-cover bg-center relative rounded-[12px] overflow-hidden flex flex-col   gap-[160px] "
      >
        {" "}
        <div className=" max-w-[288px] z-10 w-full max-h-[63px]  h-full bg-[#FFFFFF]  rounded-b-[12px]  ml-[70px]  flex justify-center items-center">
          <h1 className="font-[Poppins] font-[700px] text-[18px] leading-[100%] tracking-[0%] ">
           Avail exclusive perks
          </h1>
        </div>
        <div className="  z-50 ml-[70px] mb-[39px]">
          <h1 className="font-[Poppins] font-[500px] text-[18px] tracking-[0%] text-[#FC8A06]">
            Signup as a rider
          </h1>
          <h1 className="font-[Poppins] font-[700px] text-[44px]  tracking-[0%] text-[#FFFFFF]">
            Ride with us
          </h1>
          <button className=" mt-[35px] items-center max-w-[205px] w-full  max-h-[52px] h-full rounded-[120px]  bg-[#FC8A06] font-[Poppins] font-[700] text-[16px] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
        <div className="absolute w-[754px] h-[425px]  left-[0px] top-[0px] rounded-[12px] bg-[linear-gradient(245.7deg,_rgba(255,255,255,0)_0.94%,_rgba(3,8,31,0.19)_51.68%,_rgba(3,8,31,0.89)_87.9%)]"></div>
      </div>
    </div>
  );
}
