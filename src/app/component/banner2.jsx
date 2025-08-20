import Image from "next/image";
import Header from "./header";
import NavBar from "@/app/component/NavBar";
import Button from "./play";

export default function Banner2() {
  return (
    <div className=" relative sm:max-w-[calc(100vw_-_22px)] lg:max-w-[1528px]  mx-auto w-full  sm:min-h-[524px] lg:min-h-[611px]  mt-[94px] rounded-[12px] border-[1px] bg-[#E0E1DC] border-[#00000033] ">
      <Image
        width={720}
        height={600}
        alt=""
        src="/assets/icons/friendlaughing.png"
        className="  z-50 absolute lg:top-[-40px] lg:left-[20px] sm:top-[270px] sm:left-[23px] lg:w-[832px] lg:h-[651px]  sm:w-[322px] sm:h-[253px]"
      />
      <Image
        width={720}
        height={600}
        alt=""
        src="/assets/icons/friendlaughingblack.png"
        className=" absolute top-[-50px] left-[0px] lg:top-[-50px] lg:left-[0px] sm:top-[260px] sm:left-[14px]  lg:w-[832px] lg:h-[651px]  sm:w-[322px] sm:h-[253px]"
      />
      <div className=" sm:mt-[65px] sm:justify-center sm:items-center lg:justify-end lg:items-end   lg:mr-[85px] lg:mt-[130px] lg:ml-[570px] flex flex-col items-end lg:gap-[30px]">        <div className=" flex flex-row   sm:justify-center sm:items-center">
        <Image
          width={268}
          height={66}
          className=" lg:w-[268px] lg:h-[66px] sm:w-[101px] sm:h-[27px]"
          alt=""
          src="/assets/icons/LOGO 1.svg"
        />
        <h1 className="lg:font-bold sm:font-[700]  lg:mt-[8px] font-[poppins] lg:text-[68px] sm:text-[32px] leading-[150%] tracking-[-0.06em] text-[#03081F] lg:mr-[34px]">
          ing is more
        </h1>
      </div>
        <div className="   flex flex-row  rounded-[120px]  lg:min-w-[878px] lg:min-h-[90px] gap-[3px]   sm:justify-center sm:items-center lg:items-center lg:justify-end lg:bg-[#03081F]">
          <p className="font-[Poppins] font-[500] lg:text-[54px]  sm:text-[24px] leading-[150%] tracking-[-0.06em] text-[#FC8A06] underline">
            Personalized
          </p>
          <span className=" lg:mr-[59px]  font-[500] lg:text-[54px]  sm:text-[24px] tracking-[-0.06em] leading-[100%]   decoration-none  text-white">
            & Instant
          </span>
        </div>
        <p className="    font-[poppins]  font-[400] lg:text-[24px]  sm:text-[16px] leading-[150%] tracking-[-0.06em] text-[#03081F] lg:mr-[68px] sm:mt-[13px] ">
          Download the Order.uk app for faster ordering
        </p>
        <Button className="  lg:mr-[112px]  sm:justify-center sm:items-center sm:mt-[13px] lg:mt-[0px]  " />
      </div>

    </div>
  );
}
