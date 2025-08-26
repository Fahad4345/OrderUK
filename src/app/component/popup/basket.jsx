"use client"
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import MealDeals from '../popup/mealDeals';
import { MyContext } from '@/app/context/MyContext';



export default function PopUpBasket({ onBasketClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const [opendeal, setopendeal] = useState(false)
    const { cart, setCart } = useContext(MyContext)



    const subTotal = calSubTotal(cart)

    function calSubTotal(cart) {
        console.log(cart)

        let sum = 0;
        cart.forEach((item) => {
            sum += item.Price ? Number(item.Price.toString().replace("£", "")) : 0

        });

        return sum;


    }

    function removeItemfromCart(id) {
        setCart((prev) => prev.filter((_, i) => i !== id))

    }




    return (<div onClick={() => {
        setIsOpen(false);
        onBasketClose();
    }} >

        {isOpen && !opendeal && (<div className=' lg:flex  fixed inset-0 items-center z-50 overflow-scroll flex flex-col  bg-black/50 '>


            <div onClick={(e) => e.stopPropagation()} className=' max-w-[378px]  bg-white  w-full border-[#BCBCBC] border-[1px] rounded-[12px] flex flex-col'>
                <div className='pl-[34px] pb-[48px] items-center flex gap-[20px] pt-[49px] bg-[#028643] rounded-t-[12px] '>
                    <Image src="/assets/icons/FullShoppingBasket.svg" width={55} height={55} alt="" />
                    <h1 className=' font-[Poppins] font-[600]  text-[32px]  leading-[100%] tracking-[0em] text-white'> My Basket</h1>
                </div>


                <div></div>
                {cart.map((item, id) => (<div key={id} className=' flex flex-row justify-center items-center  pt-[25px] border-b-[1px]  border-[#00000033]'>
                    <button className=" w-[45px] h-[45px]  justify-center bg-[#FC8A06] rounded-full items-center  font-[Poppins] font-[700]  text-[24px]  leading-[100%] tracking-[0em]  text-white  flex ">1x</button>
                    <div className=' ml-[27px] flex flex-col gap-y-[6px] max-w-[178px] mb-[24px]'>
                        <h1 className=' font-[Poppins] font-[600]  text-[20px]  leading-[25px] tracking-[0em] text-[#028643]'>{item.Price}</h1>
                        <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[100%] tracking-[0em]'>{item.Name}</h1>
                        <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[18px] tracking-[0em] '>{item.Description}</h1>
                    </div>

                    <Image src="/assets/icons/Remove.svg" className='ml-[42px]' width={35} height={35} alt="" onClick={() => removeItemfromCart(id)} />

                </div>))}
                <div className='  pl-[27px] flex flex-col gap-y-[16px] mt-[34px] pb-[24px] border-b-[1px]  border-[#00000033]'>
                    <div className=' flex flex-row justify-between  w-[320px]' >
                        <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'>Sub Total:</p>
                        <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>{`£ ${subTotal.toFixed(2)}`}</p>
                    </div>
                    <div className=' flex flex-row justify-between  w-[320px]' >
                        <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'>Discounts:</p>
                        <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>-3.00</p>
                    </div><div className=' flex flex-row justify-between  w-[320px]' >
                        <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em]'> Delivery:</p>
                        <p className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] '>2.50</p>
                    </div>
                </div>
                <div>
                    <div className=' mx-[12px] flex flex-row  mt-[34px]  items-center justify-center  gap-x-[40px] rounded-[8px] min-w-[342px] min-h-[70px] bg-[#FC8A06CC]/80 '><h1 className=' font-[Poppins] font-[600]  text-[20px]  leading-[100%] tracking-[0em] text-white'>Total Pay</h1> <h1 className=' font-[Poppins] font-[600]  text-[36px]  leading-[25px] tracking-[0em] text-white'>{`£ ${subTotal.toFixed(2)}`}</h1></div>
                    <div className='px-[12px] border-b-1 border-[#00000033]'>
                        <div className="flex flex-row max-w-[342px]  max-h-[52px] mx-auto  mt-[21px] rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
                            <input
                                type="text"
                                placeholder="Choose your free item.."
                                className="px-4 py-3 text-[#000000CC]"
                            />
                        </div><div className="flex flex-row   mb-[37px] max-w-[342px] max-h-[52px] mx-auto  mt-[15px] rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
                            <input
                                type="text"
                                placeholder="Apply Coupon Code here"
                                className="px-4 py-3 text-[#000000CC]"
                            />
                        </div> </div>

                    <div className=' min-w-[158px] min-h-[115px] flex flex-row gap-x-[12px]  items-center  justify-center mx-auto mt-[17px]' >
                        <div className=' min-w-[158px] min-h-[115px] border-[1px] border-[#00000033]  rounded-[12px] flex  flex-col justify-center items-center'>
                            <Image src="/assets/icons/Delivery Scooter.svg" width={35} height={35} alt="" />
                            <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[25px] tracking-[0em] '>Delivery</h1>
                            <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[25px] tracking-[0em] '>Start at 17:50</h1>
                        </div>
                        <div className=' w-[1px] h-[104px] bg-[#00000033]'></div>
                        <div className=' min-w-[158px] min-h-[115px] border-[1px] border-[#00000033]  rounded-[12px] flex flex-col justify-center items-center'>
                            <Image src="/assets/icons/Delivery Scooter.svg" width={35} height={35} alt="" />
                            <h1 className=' font-[Poppins] font-[600]  text-[16px]  leading-[25px] tracking-[0em] '>Delivery</h1>
                            <h1 className=' font-[Poppins] font-[400]  text-[15px]  leading-[25px] tracking-[0em] '>Start at 17:50</h1>
                        </div>
                    </div>



                    <div onClick={() => {
                        setIsOpen(false);
                        setopendeal(true);
                    }} className=' w-[342px] h-[70px] items-center  mb-[10px] mx-auto flex rounded-[8px] mt-[17px] bg-[#028643]'>

                        <Image
                            width={35}
                            height={35}
                            src="/assets/icons/ForwardButtonWhite.svg"
                            alt=""
                            className="  ml-[20px] rotate-270  "
                        />

                        <span className="   text-[24px]  leading-[100%] tracking-[0em] text-white font-[Poppins] font-[600] mx-auto  text-center">
                            Checked!
                        </span>
                    </div>
                    <div className=' justify-center  mx-auto flex items-center relative w-[342px] mb-[30px] bg-[#03081F] mt-[20px] rounded-[8px]'>
                        <Image width={41} height={41} alt="" src="/assets/icons/Error.svg" className='absolute top-[-30px] left-[148px]' />
                        <p className=' font-[Poppins] rounded-[8px] text-white text-center font-[600] text-[17px] leading-[120%] px-[19px] py-[22px]'>We are open now, but delivery starts at <span className='text-[#FC8A06]'>18:00</span>  however you may order and collect in store now</p>
                    </div>



                </div>




            </div>

        </div>)}
        {opendeal && <MealDeals onClose={() => { setopendeal(false); setIsOpen(false); onBasketClose(); }} />}
    </div>

    )
}
































































// "use client"
// import React, { useState, useContext } from 'react'

// import Image from 'next/image';
// import { MyContext } from "../../context/MyContext";
// import { restaurants } from '../../lib/restaurants';

// export default function MidTile() {
//   const { index, setIndex, cart, setCart, selectedCategory } = useContext(MyContext);
//   const [selections, setSelections] = useState({});
//   const max = 5;
//   const SpiceLevel = 2;


//   function addtoCart(item) {
//     const selection = selections[item.name] || {
//       size: item.sizes[0].label,
//       price: parseFloat(item.sizes[0].price.toString().replace("£", ""))
//     };
//     const itemWithRestName = {
//       Name: item.name, Restaurant: restaurants[index].name, Description: item.description, Size: selection.size, Price: selection.price
//     };

//     setCart((Prev) => [...Prev, itemWithRestName])
//     alert("added")
//   }


//   return (
//     <div className='sm:max-w-[calc(100vw_-_22px)] lg:min-w-[754px]  '>
//       <div className="  justify-between flex sm:max-w-[calc(100vw_-_22px)] lg:max-w-[754px] max-w-[754px] ">
//         <h1 className="font-[Poppins] lg:ml-[32px] font-[600] text-[32px] leading-[100%] tracking-[0em] text-[#03081F]">{selectedCategory}
//         </h1>
//         <div className=" px-4 py-3 flex flex-row lg:w-[274px]  justify-between sm:w-[207px] lg:mr-[19px]  rounded-l-full  rounded-r-full border-[1px]  border-[#00000066]  border-opacity-[20%]">
//           <input
//             type="text"
//             placeholder="Sort by Pricing"
//             className=" lg:w-[274px]  sm:w-[114px] text-[#000000CC]"
//           />  <Image src="/assets/icons/Forward Button (1).svg" className=" rotate-y-180 " width={30} height={30} alt="" />

//         </div>
//       </div>
//       <div className='items-center flex justify-between gap-[20px] mt-[49px] sm:flex lg:hidden rounded-[12px]  px-[20px] py-[12px] border-[1px] border-[#0000004D]'>
//         <div className='flex flex-row items-center'>
//           <Image src="/assets/icons/Menu.svg" width={55} height={55} alt="" />
//           <h1 className='  ml-[20px] font-[Poppins] fonty-[600]  text-[32px]  leading-[100%] tracking-[0em] '>Menu</h1>
//         </div>
//         <div className='flex flex-row items-center'>
//           <h1 className=' font-[Poppins] font-[400]  mr-[34px] text-[16px]  leading-[100%] tracking-[0em] '>{selectedCategory}</h1>
//           <Image src="/assets/icons/Forward Button (1).svg" width={30} height={30} alt="" />
//         </div>

//       </div>
//       {restaurants[index].menu[selectedCategory].map((item, id) => (<div key={id}>

//         <div className=' lg:py-[28px] sm:py-[33px] lg:px-[32px] sm:px-[12px] shadow-[5px_5px_34px_0px_#00000040] rounded-[8px] mt-[31px] '>

//           <div className='sm:hidden lg:flex '>
//             <div className=' flex justify-between  w-full'>
//               <div className=''>
//                 <div className='flex flex-col'>
//                   <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
//                   <div className="flex items-center">
//                     {[...Array(max)].map((_, i) => (
//                       <Image
//                         key={i}
//                         src={i < SpiceLevel ? "/assets/icons/redchilli.svg" : "/assets/icons/greychilli.svg"}
//                         alt=""
//                         width={720}
//                         height={600}
//                         className="w-[20px] h-[20px]"
//                       />
//                     ))}
//                   </div>

//                 </div>

//                 <h1 className="font-[Poppins] mt-[27.96px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>
//               </div>
//               <div className=' rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
//             </div>
//           </div>

//           <div className='sm:flex lg:hidden flex-col '>
//             <div className=' flex justify-between '>
//               <div className=''>
//                 <h1 className="font-[Poppins]  font-[600] text-[24px] leading-[200%] tracking-[0em] text-[#03081F]">{item.name}</h1>
//                 <div className="flex items-center">
//                   {[...Array(max)].map((_, i) => (
//                     <Image
//                       key={i}
//                       src={i < SpiceLevel ? "/assets/icons/redChilli.svg" : "/assets/icons/greyChilli.svg"}
//                       alt=""
//                       width={720}
//                       height={600}
//                       className="w-[20px] h-[20px]"
//                     />
//                   ))}
//                 </div>
//                 <h1 className="font-[Poppins] mt-[19px] mb-[19px] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#03081F]">{item.description}</h1>

//               </div>
//               <div className=' rounded-full'><Image src="/assets/icons/Pizza1.png" width={191} height={191} alt="" className=' w-[117px] h-[117px]' /></div>
//             </div>
//           </div>
//           <div className=' flex flex-row w-full  gap-[20px] items-end justify-between  mt-[31px]'>
//             <div className=' flex   w-fit flex-wrap  gap-x-[6px] gap-y-[19px] flex-row  mt-[31px]  '>
//               {item.sizes.map((s, id) => (
//                 <div key={id} onClick={() => {
//                   setSelections(prev => ({
//                     ...prev,
//                     [item.name]: { size: s.label, price: parseFloat(s.price.toString().replace("£", "")) }
//                   }));
//                 }} className={`flex flex-row  h-fit  py-[10px] px-[8px]  gap-x-[21px] items-center rounded-[4px] border-[1px] border-[#03081F] ${selections[item.name]?.size === s.label ? "bg-[#03081F]" : ""}`}>
//                   <div className='flex justify-center items-center'> <h1 className={`font-[Poppins] font-[700] text-[14px] leading-[25px] tracking-[0em] ${selections[item.name]?.size === s.label ? "text-white" : "text-[#03081F]"
//                     }`}>{s.label}</h1></div>
//                   <div className='  min-h-[39px] min-w-[90px] bg-[#028643] flex justify-center items-center'><h1 className="font-[Poppins]  font-[700] text-[14px] leading-[25px] tracking-[0em] text-[#FFFFFF] ">{s.price}</h1></div>
//                 </div >
//               ))}


//             </div>
//             <div className=" flex justify-center item-center w-[100px] h-[100px] z-50  bg-amber-500 rounded-tl-[46px] rounded-br-[46px]"

//               onClick={() => { addtoCart(item); }}
//             >
//               <Image
//                 width={49}
//                 height={49}
//                 src="/assets/icons/Plus.svg"
//                 alt=""
//               />
//             </div>
//           </div>



//         </div>

//       </div>




//       ))
//       }
//       <div

//         style={{
//           backgroundImage: ` linear-gradient(245.7deg, rgba(255, 255, 255, 0) 0.94%, rgba(3, 8, 31, 0.19) 51.68%, rgba(3, 8, 31, 0.89) 87.9%),
//                           url('/assets/icons/Rectangle8.png')` }}
//         className=" relative mt-[27px] sm:max-w-[388px] sm:min-h-[325px]  mx-auto  sm:flex xl:flex 2xl:hidden bg-cover bg-center  rounded-[12px] flex flex-col   "
//       >
//         {" "}
//         <div className="   z-50 lg:w-[88px] sm:w-[68.84px] lg:ml-[22px] sm:ml-[23.26px]  lg:h-[66px] sm:h-[66px] h-full bg-[#03081F]   lg:rounded-b-[12px] sm:rounded-b-[4px] lg:mr-[20px] sm:mr-[16px]  flex justify-center items-center">
//           <h1 className="font-[Poppins] font-[700] lg:text-[18px] sm:text-[15px] leading-[100%] tracking-[0em] text-white">
//             20%
//           </h1>
//         </div>
//         <div className="  mt-[170px] flex flex-col  lg:flex  ml-[22px] mb-[26px] ">
//           <h1 className="font-[Poppins] font-[500] text-[18px] leading-[200%] tracking-[0em] text-[#FC8A06]">
//             Special offer
//           </h1>
//           <h1 className="font-[Poppins] font-[700] text-[24px] leading-[150%] tracking-[0em]  text-[#FFFFFF]">
//             First Order Discount
//           </h1>
//         </div>
//         <div className="absolute flex justify-center item-center w-[71.77px] h-[89px] right-[0px] bottom-[-1px] z-50 bg-[#FFFFFF]/90 rounded-tl-[46px]"
//           onClick={() => addtoCart(items)}>
//           <Image
//             width={36.26}
//             height={49}
//             src="/assets/icons/Plus.svg"
//             alt=""
//           />
//         </div>

//       </div>


//     </div >

//   )
// }
