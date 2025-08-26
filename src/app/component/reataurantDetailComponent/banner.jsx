"use client"
import { useContext } from "react";
import { MyContext } from "../../context/MyContext.jsx";
import { restaurants } from '../../lib/restaurants.js';
import Image from "next/image.js";

export default function Banner() {
    const { index, setIndex } = useContext(MyContext);
    return (
        <div className='sm:max-w-[calc(100vw_-_22px)] lg:max-w-[calc(100vw_-_22px)]  2xl:max-w-[1528px]  mt-[41px] w-full   sm:mx-auto rounded-[12px]'
            style={{ backgroundImage: ` url("/assets/icons/Rectangle 43.png")` }}>

            <div className='max-w-[1528px] flex-wrap  relative  sm:justify-center lg:justify-start flex flex-row w-full lg:h-[477px] sm:h-[593px] mx-auto rounded-[12px] bg-[#E2E2E2E5]/90 dark:bg-[#03081F]/90 '>
                <div className=" sm:flex lg:hidden relative  sm:mt-[43px] lg:mt-[0px] flex">
                    <Image alt="" src="/assets/icons/Rectangle 44.png" className=" lg:w-[581] lg:h-[361px] sm:w-[228px] sm:h-[142px]" width={581} height={361} />
                    <Image width={153} height={178} src="/assets/icons/Review bar.png" alt="" className="  lg:w-[153px] lg:h-[178px] sm:w-[53px] sm:h-[62px]  absolute   lg:top-[250px] lg:right-[501px]" />
                </div>
                <div className=" w-full  sm:flex lg:hidden ">
                    <div className=" items-center  justify-center flex gap-[13px] mr-[62px] h-[61px]  sm:flex lg:hidden w-[335px]  bg-[#FC8A06] rounded-r-[12px] mt-[34px]">
                        <Image alt="" src="/assets/icons/Clock (1).svg" className=" w-[29px] h-[29px]" width={581} height={361} />
                        <p className=" text-white font-[Poppins] font-[600] lg:text-[20px] sm:text-[18px]  sm:text-center lg:text-start    leading-[66px] tracking-[0em] ">Open at 3:00 am</p></div>
                </div>


                <div className=" lg:ml-[57px] lg:pt-[171px] "><p className=" font-[Poppins] font-[400] lg:text-[20px] sm:text-[13px]  sm:text-center lg:text-start   text-[#000000] dark:text-white">Desi Flavours with a blend of Italian aesthetics!</p>
                    <h1 className=" font-[Poppins] font-[700] lg:text-[44px] sm:text-[28px] sm:text-center lg:text-start leading-[66px] tracking-[0em] text-[#000000] dark:text-white">{restaurants[index].name}</h1>
                    <div className=" flex lg:flex-row sm:flex-col lg:items-start sm:items-center gap-[17px] lg:mt-[31px] sm:mt-[14px] ">
                        <div className=" max-w-[330px] w-full  min-w-[300px]  flex flex-row  lg:gap-[17px] sm:gap-[15px] justify-center items-center rounded-[120px] bg-[#03081F]">
                            <Image alt="" src="/assets/icons/Order Completed.svg" width={34} height={34} />
                            <p className=" font-[Poppins] font-[600] text-[18px] leading-[66px] tracking-[0%] text-white ">Minimum Order: 12 GBP </p>

                        </div>
                        <div className=" max-w-[330px] min-w-[300px] w-full flex flex-row  gap-[17px] justify-center items-center rounded-[120px] bg-[#03081F]">
                            <Image alt="" src="/assets/icons/Order Completed.svg" width={34} height={34} />
                            <p className=" font-[Poppins] font-[600] text-[18px] leading-[66px] tracking-[0%] text-white ">Minimum Order: 12 GBP </p>

                        </div>

                    </div>
                </div>
                <div className="pt-[57px] ml-[137px] sm:hidden  xl:hidden  2xl:flex relative">
                    <Image alt="" src="/assets/icons/Rectangle 44.png" className=" lg:w-[581] lg:h-[361px] sm:w-[228px] sm:h-[142px]" width={581} height={361} />
                    <Image width={153} height={178} src="/assets/icons/Review bar.png" alt="" className="  lg:w-[153px] lg:h-[178px] sm:w-[53px] sm:h-[62px]  absolute   lg:top-[250px] lg:right-[501px]" />
                </div>
                <div className=" items-center  bottom-[-26px]  left-0  absolute justify-center flex gap-[13px] mr-[62px] h-[61px]  sm:hidden lg:flex w-[335px]  bg-[#FC8A06] rounded-r-[12px] mt-[34px]">
                    <Image alt="" src="/assets/icons/Clock (1).svg" className=" w-[29px] h-[29px]" width={581} height={361} />
                    <p className=" text-white font-[Poppins] font-[600] lg:text-[20px] sm:text-[18px]  sm:text-center lg:text-start   leading-[66px] tracking-[0em] ">Open at 3:00 am</p></div>

            </div>


        </div>
    )
}
