


"use client"
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { restaurants } from '../../lib/restaurants';
import { MyContext } from "../../context/MyContext";
import toast from "react-hot-toast";


export default function Menupopup({ item, onMenuPopupClose }) {
    const { index, setIndex, cart, setCart } = useContext(MyContext);
    const [size, setSize] = useState("Small");
    const [price, setPrice] = useState("£5.99");
    const max = 5;
    const SpiceLevel = 3;
    const sizes = item.sizes;







    function addtoCart(items) {
        const itemWithRestName = {
            name: items.name, restaurant: restaurants[index].name, description: item.description, size: size, price: price
        };
        console.log(price)
        setCart((Prev) => {

            const existing = Prev.find(
                (i) => i.name === itemWithRestName.name && i.size === itemWithRestName.size
            );

            if (existing) {

                return Prev.map((i) =>
                    i.name === itemWithRestName.name && i.size === itemWithRestName.size
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {

                return [...Prev, { ...itemWithRestName, quantity: 1 }];
            }
        });



    }
    return (
        <div className='fixed inset-0  overflow-y-scroll z-70 flex items-center justify-center bg-black/10'
            onClick={() => { onMenuPopupClose(); }
            }>
            <div className=' bg-white mx-[50px]  lg:max-w-[1300px] sm:min-w-[350px] w-full lg:py-[28px] sm:py-[25px] lg:px-[32px] sm:px-[25px] shadow-[5px_5px_34px_0px_#00000040] rounded-tl-[46px] rounded-br-[46px] mt-[31px]  ' onClick={(e) => e.stopPropagation()}>

                <div className='sm:hidden lg:flex   w-full'>
                    <div className=' flex justify-between w-full'>
                        <div className=''>
                            <div className='flex flex-col'>
                                <h1 className="font-[Poppins]  font-[600] text-[38px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
                                <div className="flex items-center">
                                    {[...Array(max)].map((_, i) => (
                                        <Image
                                            key={i}
                                            src={i < SpiceLevel ? "/assets/icons/redchilli.svg" : "/assets/icons/greychilli.svg"}
                                            alt=""
                                            width={720}
                                            height={600}
                                            className="w-[50px] h-[50px]"
                                        />
                                    ))}
                                </div>

                            </div>

                            <h1 className="font-[Poppins] mt-[27.96px] font-[400] text-[24px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>
                        </div>
                        <div className=' rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[150px] h-[150px]' /></div>
                    </div>
                </div>

                <div className='sm:flex lg:hidden flex-col '>
                    <div className=' flex justify-between '>
                        <div className=''>
                            <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
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
                <div className="flex justify-between flex-col  gap-[10px] ">

                    <div className=' flex flex-wrap lg:gap-x-[20px] lg:gap-y-[19px] sm:gap-x-[6px] sm:gap-y-[19px] flex-row  mt-[31px] '>
                        {sizes.map((s, id) => (
                            <div key={id} onClick={() => { setSize(s.label); setPrice(s.price); console.log(s.price) }} className={`flex flex-row  sm:py-[10px] sm:px-[8px] lg:py-[30px] lg:px-[30px] sm:gap-x-[21px] lg:gap-x-[30px] items-center rounded-[4px] border-[1px] border-[#03081F] ${s.label === size ? "bg-[#03081F]" : ""}`}>
                                <div className='flex justify-center items-center'> <h1 className={`font-[Poppins] font-[700] lg:text-[24px] sm:text-[14px] leading-[25px] tracking-[0em] ${s.label === size ? "text-white" : "text-[#03081F]"
                                    }`}>{s.label}</h1></div>
                                <div className='  min-h-[39px] min-w-[90px] bg-[#028643] flex justify-center items-center'><h1 className="font-[Poppins]  font-[700] lg:text-[24px] sm:text-[14px]  leading-[25px] tracking-[0em] text-[#FFFFFF] ">{s.price}</h1></div>
                            </div >
                        ))}


                    </div>

                    <div className=" flex w-full justify-end">
                        <div className=" flex justify-center item-center lg:w-[150px] lg:h-[140px] sm:w-[120px] sm:h-[100px]  z-50  bg-amber-500 rounded-tl-[46px] rounded-br-[46px]"

                            onClick={() => {
                                addtoCart(item); onMenuPopupClose();
                                toast.success("Added to your Cart", {
                                    icon: '👏',
                                    style: {
                                        fontFamily: "Poppins",
                                        fontSize: "18px",

                                        borderRadius: '10px',
                                        background: '#333',
                                        color: '#fff',
                                    },
                                })
                            }}
                        >
                            <Image
                                width={49}
                                height={49}
                                src="/assets/icons/Plus.svg"
                                alt=""
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div >


    );
}
