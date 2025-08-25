


"use client"
import React, { useContext, useState } from "react";
import Image from "next/image";
import { restaurants } from '../../lib/restaurants';
import { MyContext } from "../../context/MyContext";

export default function Menupopup({ itemid, catid }) {
    const { index } = useContext(MyContext);
    const [size, setSize] = useState("");
    const max = 5;
    const SpiceLevel = 3;

    const categoryKeys = Object.keys(restaurants[index].menu);
    const category = categoryKeys[catid];
    const item = restaurants[index].menu[category][itemid];



    return (
        <div className='fixed inset-0 overflow-y-scroll z-70 flex items-center justify-center bg-black/10'>
            <div className=' bg-white lg:py-[28px] sm:py-[33px] lg:px-[32px] sm:px-[12px] shadow-[5px_5px_34px_0px_#00000040] rounded-[8px] mt-[31px] '>

                <div className='sm:hidden lg:flex '>
                    <div className=' flex justify-between  w-full'>
                        <div className=''>
                            <div className='flex flex-col'>
                                <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
                                <div className="flex items-center">
                                    {[...Array(max)].map((_, i) => (
                                        <Image
                                            key={i}
                                            src={i < SpiceLevel ? "/assets/icons/redchilli.svg" : "/assets/icons/greychilli.svg"}
                                            alt=""
                                            width={720}
                                            height={600}
                                            className="w-[20px] h-[20px]"
                                        />
                                    ))}
                                </div>

                            </div>

                            <h1 className="font-[Poppins] mt-[27.96px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>
                        </div>
                        <div className=' rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
                    </div>
                </div>

                <div className='sm:flex lg:hidden flex-col '>
                    <div className=' flex justify-between '>
                        <div className=''>
                            <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[100%] tracking-[0em] text-[#03081F]">{item.name}</h1>
                            <div className="flex items-center">
                                {[...Array(max)].map((_, i) => (
                                    <Image
                                        key={i}
                                        src={i < SpiceLevel ? "/assets/icons/redChilli.svg" : "/assets/icons/greyChilli.svg"}
                                        alt=""
                                        width={720}
                                        height={600}
                                        className="w-[20px] h-[20px]"
                                    />
                                ))}
                            </div>
                            <h1 className="font-[Poppins] mt-[19px] mb-[19px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>

                        </div>
                        <div className=' rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
                    </div>
                </div>

                <div className=' flex flex-wrap  gap-x-[6px] gap-y-[19px] flex-row  mt-[31px]'>
                    {item.sizes.map((s, id) => (
                        <div key={id} onClick={() => setSize(s.label)} className={`flex flex-row   py-[10px] px-[8px]  gap-x-[21px] items-center rounded-[4px] border-[1px] border-[#03081F] ${s.label === size ? "bg-[#03081F]" : ""}`}>
                            <div className='flex justify-center items-center'> <h1 className={`font-[Poppins] font-[700] text-[14px] leading-[25px] tracking-[0em] ${s.label === size ? "text-white" : "text-[#03081F]"
                                }`}>{s.label}</h1></div>
                            <div className='  min-h-[39px] min-w-[90px] bg-[#028643] flex justify-center items-center'><h1 className="font-[Poppins]  font-[700] text-[14px] leading-[25px] tracking-[0em] text-[#FFFFFF] ">{s.price}</h1></div>
                        </div >
                    ))}

                </div>
            </div>

        </div>
    );
}
