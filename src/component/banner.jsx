import Image from "next/image";
import Header from "../component/header";
import NavBar from "@/component/NavBar";


export default function  Banner() {
  return (
    <div className=" max-w-[1528px] w-full h-[610px]  rounded-[12px] border-[1px] bg-[#FBFBFB] border-[#00000033] mx-auto flex flex-row justify-between mt-[41px]">
          <div className="ml-[57px] mt-[134px]">
              <div>
              <p className='font-[Poppins] font-[400] text-[16px] leading-[66px] tracking-[0%] text-[#03081F]'>Order Restaurant food, takeaway and groceries.</p>
              <p className='font-[Poppins] font-[600] text-[54px] leading-[66px] tracking-[0%] text-[#03081F]'>Feast Your Senses,</p>
              <p className='font-[Poppins] font-[600] text-[54px] leading-[66px] tracking-[0%] text-[#FC8A06]'>Fast and Fresh</p>
              </div>
              <div>
              <p className='font-[Poppins] font-[400] text-[13px] leading-[66px] text-[#03081F] tracking-[0%]'>Enter a postcode to see what we deliver</p>
           
             <div className="flex flex-row w-[360px]   rounded-l-full  rounded-r-full  border-r-[#FC8A06] border-[1px]  border-[#00000066]  border-opacity-[20%]">
             <input type="text" placeholder="e.g. EC4R 3TE" className="px-4 py-3 text-[#000000CC]"/>
             <button className=" z-50 items-center left-[209px] top-[-0.5px]  max-w-[188px] w-full h-[49.5px] rounded-[120px]  bg-[#FC8A06] font-[Poppins] font-[700] text-[16px] text-[#FFFFFF]">Search</button>
             </div>
             </div>
          </div>
          
          <div>
        <div className="  bg-[#FC8A06] w-[626px] relative  h-[565px]  rounded-tl-[282.5px] rounded-br-[12px] mt-[44px]">
          <div className="  z-50 absolute top-[70px] left-[130px] bg-white max-w-[370px]   w-full   flex flex-row  justify-between  rounded-[12px] px-[20px] py-[20px]">
            <Image width={25} height={102} src={"/assets/icons/1.svg"} alt="" className='absolute top-[-70px]  right-[15px] w-[25px] h-[102px]' />
            <div className=" flex flex-col">
            <Image width={58} height={15} src={"/assets/icons/LOGO 1.svg"} alt="" className=' w-[58px] h-[15px]' />
            <span className=' mt-[10px] font-[Poppins] font-[600] text-[12px] leading-[100%] tracking-[0%] text-[#000000]'>We’ve Received your order!</span>
            <p className='font-[Poppins] mt-[5px] font-[400] text-[12px] leading-[100%] tracking-[0%] text-black/80'>Awaiting Restaurant acceptance </p>
            </div>
            <h1 className="font-[Poppins] font-[400] text-[12px] leading-[100%] tracking-[0%] text-[#000000]">now</h1>
          </div>
          <div className="  z-50 absolute top-[235px] left-[250] bg-white max-w-[370px]   w-full   flex flex-row  justify-between p-[30px] rounded-[12px] px-[20px] py-[20px]">
            <Image width={40} height={102} src={"/assets/icons/2.svg"} alt="" className=' absolute top-[-77px]  right-[15px] w-[40px] h-[102px]' />
            <div className=" flex flex-col">
            <Image width={58} height={15} src={"/assets/icons/LOGO 1.svg"} alt="" className=' w-[58px] h-[15px]' />
            <span className=' mt-[10px] font-[Poppins] font-[600] text-[12px] leading-[100%] tracking-[0%] text-[#000000]'>Order Accepted! </span>
            <p className='font-[Poppins] mt-[5px] font-[400] text-[12px] leading-[100%] tracking-[0%] text-black/80'>Your order will be delivered shortly</p>
            </div>
            <h1 className="font-[Poppins] font-[400] text-[12px] leading-[100%] tracking-[0%] text-[#000000]">now</h1>
          </div>
          <div className="  z-50 absolute top-[410px] left-[200px]  bg-white max-w-[370px]   w-full   flex flex-row  justify-between  rounded-[12px] px-[20px] py-[20px]">
          
             <Image width={41} height={102} src={"/assets/icons/3.svg"} alt="" className='absolute top-[-75px]  right-[15px] w-[41px] h-[102px]' />
            <div className=" flex flex-col">
            <Image width={58} height={15} src={"/assets/icons/LOGO 1.svg"} alt="" className=' w-[58px] h-[15px]' />
            <span className=' mt-[10px] font-[Poppins] font-[600] text-[12px] leading-[100%] tracking-[0%] text-[#000000]'>Your rider's nearby</span>
            <p className='font-[Poppins] mt-[5px] font-[400] text-[12px] leading-[100%] tracking-[0%] text-black/80'>They're almost there- get ready!</p>
            </div>
            <h1 className="font-[Poppins] font-[400] text-[12px] leading-[100%] tracking-[0%] text-[#000000]">now</h1>
          </div>
              <Image width={720} height={600} src={"assets/icons/Untitled-2 1.svg"} alt="" className='   bottom-[0px] right-[291px] absolute w-[377px] h-[455px]' />
              <Image width={720} height={600} src={"/assets/icons/Untitled-1 1.png"} alt="" className='   bottom-[0px] right-[460px] absolute  w-[805px] h-[537px]'/>
             
        </div>
       
      
          </div>
    </div>
  );
}
