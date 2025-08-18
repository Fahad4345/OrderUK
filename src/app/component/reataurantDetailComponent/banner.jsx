"use client"
import { useContext } from "react";
import { MyContext } from "../../context/MyContext.jsx";
import { restaurants } from '../restaurants';
import Image from "next/image.js";

export default function Banner() {
    const { index, setIndex } = useContext(MyContext);
    return (
        <div className='max-w-[1528px] mt-[41px] w-full h-[477px] mx-auto rounded-[12px]'
            style={{ backgroundImage: ` url("/assets/icons/Rectangle 43.png")` }}>
            <div className='max-w-[1528px]  flex flex-row w-full h-[477px] mx-auto rounded-[12px] bg-[#E2E2E2E5]/90'>
                <div className=" ml-[57px] pt-[171px] "><p className=" font-[Poppins] font-[400] text-[20px] leading-[66px] tracking-[0%] text-[#000000]">Desi Flavours with a blend of Italian aesthetics!</p>
                    <h1 className=" font-[Poppins] font-[700] text-[44px] leading-[66px] tracking-[0%] text-[#000000]">{restaurants[index].name}</h1>
                    <div className=" flex flex-row gap-[17px] mt-[31px]">
                        <div className=" w-[330px]  flex flex-row  gap-[17px] justify-center items-center rounded-[120px] bg-[#03081F]">
                            <Image alt="" src="/assets/icons/Order Completed.svg" width={34} height={34} />
                            <p className=" font-[Poppins] font-[600] text-[18px] leading-[66px] tracking-[0%] text-white ">Minimum Order: 12 GBP </p>

                        </div>
                        <div className=" w-[330px]  flex flex-row  gap-[17px] justify-center items-center rounded-[120px] bg-[#03081F]">
                            <Image alt="" src="/assets/icons/Order Completed.svg" width={34} height={34} />
                            <p className=" font-[Poppins] font-[600] text-[18px] leading-[66px] tracking-[0%] text-white ">Minimum Order: 12 GBP </p>

                        </div>

                    </div>
                </div>
                <div className="pt-[57px] ml-[137px]  relative">
                    <Image alt="" src="/assets/icons/Rectangle 44.png" width={581} height={361} />
                    <Image width={153} height={178} src="/assets/icons/Review bar.png" alt="" className="   absolute   top-[250px] right-[501px]" />
                </div>

            </div>


        </div>
    )
}
