import Image from "next/image";
import Header from "./header";
import NavBar from "@/component/NavBar";
import AppleIcon from "./appleIcon";
import { FaApple } from "react-icons/fa";

export default function Banner2() {
  return (
    <div className=" relative max-w-[1528px]  w-full  min-h-[610px]  mt-[94px] rounded-[12px] border-[1px] bg-[#E0E1DC] border-[#00000033] ">
      <Image
        width={720}
        height={600}
        alt=""
        src="/assets/icons/friendlaughing.png"
        className="  z-50 absolute top-[-40px] left-[20px] w-[832px] h-[651px]"
      />
      <Image
        width={720}
        height={600}
        alt=""
        src="/assets/icons/friendlaughingblack.png"
        className=" absolute top-[-50px] left-[0px] w-[832px] h-[651px]"
      />
      <div className="   mr-[85px] mt-[130px] ml-[570px] flex flex-col items-end gap-[30px]">
        <div className=" flex flex-row ">
          <Image
            width={268}
            height={66}
            className=" w-[268px] h-[66px]"
            alt=""
            src="/assets/icons/LOGO 1.svg"
          />
          <h1 className="font-bold  mt-[8px] font-[poppins] text-[68px] leading-[100%] tracking-[-0.06em] text-[#03081F] mr-[34px]">
            ing is more
          </h1>
        </div>
        <div className="flex flex-row  rounded-[120px]  min-w-[878px] min-h-[90px] gap-[3px] items-center justify-end bg-[#03081F]">
          <p className="font-[Poppins] font-[500] text-[54px] leading-[100%] tracking-[-0.06em] text-[#FC8A06] underline">
            Personalized
          </p>
          <span className=" mr-[59px]  font-[500] text-[54px]  tracking-[-0.06em] leading-[100%]   decoration-none  text-white">
            & Instant
          </span>
        </div>
        <p className=" font-[poppins]  font-[400] text-[24px] leading-[100%] tracking-[-0.06em] text-[#03081F] mr-[68px] ">
          Download the Order.uk app for faster ordering
        </p>
      </div>
      <div className=" items-center flex flex-row mt-[23px] ml-[923px] ">
        <button>
          <div className="flex min-w-[203px] w-full items-center gap-3 bg-black text-white px-4 py-2 border-[2px] border-[#A6A6A6] rounded-xl">
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
  );
}
