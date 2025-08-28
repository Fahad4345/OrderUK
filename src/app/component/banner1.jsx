import Image from "next/image";
import Header from "./header";
import NavBar from "@/app/component/NavBar";

export default function Banner1() {
  return (
    <div className=" xl:max-w-[calc(100vw_-_35px)] sm:max-w-[calc(100vw_-_22px)]  2xl:max-w-[calc(1540px_-_22px)] max-w-[1528px] dark:bg-[#03081F] w-full max-h-[610px]  rounded-[12px]  dark:border-none border-[1px] lg:bg-[#FBFBFB] sm:bg-[#E2E2E2] border-[#00000033] lg:mx-auto flex flex-row lg:justify-between sm:justify-center items-center sm:mx-auto mt-[41px]">
      <div className="lg:ml-[57px] ">
        <div>
          <p className="font-[Poppins] font-[400] lg:text-[16px] dark:text-white sm:text-[12px] leading-[66px]  text-[#03081F]">
            Order Restaurant food, takeaway and groceries.
          </p>
          <p className="font-[Poppins] font-[600] dark:text-white lg:text-[54px] lg:leading-[66px] sm:text-[34px] sm:leading-[36px]  text-[#03081F]">
            Feast Your Senses,
          </p>
          <p className="font-[Poppins] font-[600] dark:text-[#FC8A06]  lg:text-[54px] lg:leading-[66px] sm:text-[34px] sm:leading-[36px]  text-[#FC8A06]">
            Fast and Fresh
          </p>
        </div>
        <div className="sm:mb-[43px]">
          <p className="font-[Poppins] font-[400] dark:text-white text-[13px] cursor-pointer text-[#03081F]  mt-[28px] mb-[12px]">
            Enter a postcode to see what we deliver
          </p>

          <div className="flex cursor-pointer relative sm: bg-white flex-row   justify-between lg:max-w-[397px] sm:max-w-[293px] min-h-[57px]   rounded-l-full  rounded-r-full  border-[1px]  border-[#00000066]  border-opacity-[20%]">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="pl-[28px] font-[Poppins] font-[400] text-[15px]
               overflow-hidden text-[#000000CC] focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <button className=" items-center justify-center flex  cursor-pointer absolute right-[-0.7px] top-[-0.5px]  lg:max-w-[188px] sm:max-w-[57px] w-full h-[57px] rounded-[120px]  bg-[#FC8A06] ">
              <p className=" sm:hidden lg:flex font-[700] text-[16px] leading-[66px] font-[Poppins]  text-[#FFFFFF]">Search</p>
              <Image
                width={34}
                height={34}
                src={"/assets/icons/NextPage.svg"}
                alt=""
                className="  lg:hidden sm:flex w-[34px] h-[34px] cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      <div className=" sm:hidden lg:flex">
        <div className="  bg-[#FC8A06] w-[626px] relative  h-[565px]  rounded-tl-[282.5px] rounded-br-[12px] mt-[45px]">
          <div className="  z-20 absolute top-[70px] left-[130px] bg-white max-w-[370px]   w-full   flex flex-row  justify-between  rounded-[12px] px-[20px] py-[20px]">
            <Image
              width={25}
              height={102}
              src={"/assets/icons/1.svg"}
              alt=""
              className="absolute top-[-70px]  right-[15px] w-[25px] h-[102px]"
            />
            <div className=" flex flex-col">
              <Image
                width={58}
                height={15}
                src={"/assets/icons/LOGO 1.svg"}
                alt=""
                className=" w-[58px] h-[15px]"
              />
              <span className=" mt-[10px] font-[Poppins] font-[600] text-[12px] leading-[150%] tracking-[0em] text-[#000000]">
                We’ve Received your order!
              </span>
              <p className="font-[Poppins]  font-[400] text-[12px] leading-[150%] tracking-[0em] text-black/80">
                Awaiting Restaurant acceptance{" "}
              </p>
            </div>
            <h1 className="font-[Poppins] font-[400] text-[12px] leading-[150%] tracking-[-0.06em] text-[#000000]/50">
              now
            </h1>
          </div>
          <div className="  z-20 absolute top-[235px] left-[250] bg-white max-w-[370px]   w-full   flex flex-row  justify-between p-[30px] rounded-[12px] px-[20px] py-[20px]">
            <Image
              width={40}
              height={102}
              src={"/assets/icons/2.svg"}
              alt=""
              className=" absolute top-[-77px]  right-[15px] w-[40px] h-[102px]"
            />
            <div className=" flex flex-col">
              <Image
                width={58}
                height={15}
                src={"/assets/icons/LOGO 1.svg"}
                alt=""
                className=" w-[58px] h-[15px]"
              />
              <span className=" mt-[10px] font-[Poppins] font-[600] text-[12px] leading-[150%] tracking-[0em] text-[#000000]">
                Order Accepted!{" "}
              </span>
              <p className="font-[Poppins]  font-[400] text-[12px] leading-[150%] tracking-[0em] text-black/80">
                Your order will be delivered shortly
              </p>
            </div>
            <h1 className="font-[Poppins] font-[400] text-[12px] leading-[150%] tracking-[0em] text-[#000000]/50">
              now
            </h1>
          </div>
          <div className="  z-20 absolute top-[410px] left-[200px]  bg-white max-w-[370px]   w-full   flex flex-row  justify-between  rounded-[12px] px-[20px] py-[20px]">
            <Image
              width={41}
              height={102}
              src={"/assets/icons/3.svg"}
              alt=""
              className="absolute top-[-75px]  right-[15px] w-[41px] h-[102px]"
            />
            <div className=" flex flex-col">
              <Image
                width={58}
                height={15}
                src={"/assets/icons/LOGO 1.svg"}
                alt=""
                className=" w-[58px] h-[15px]"
              />
              <span className=" mt-[10px] font-[Poppins] font-[600] text-[12px] leading-[150%] tracking-[0em] text-[#000000]">
                Your rider's nearby
              </span>
              <p className="font-[Poppins]  font-[400] text-[12px] leading-[150%] tracking-[0em] text-black/80">
                They're almost there- get ready!
              </p>
            </div>
            <h1 className="font-[Poppins] font-[400] text-[12px] leading-[150%] tracking-[0em] text-[#000000]/50">
              now
            </h1>
          </div>
          <Image
            width={720}
            height={600}
            src={"assets/icons/Untitled-2 1.svg"}
            alt=""
            className="   bottom-[0px] right-[291px] absolute w-[377px] h-[455px]"
          />
          <Image
            width={720}
            height={600}
            src={"/assets/icons/Untitled-1 1.png"}
            alt=""
            className="   bottom-[0px] right-[460px] absolute  w-[805px] h-[537px]"
          />
        </div>
      </div>
    </div>
  );
}
