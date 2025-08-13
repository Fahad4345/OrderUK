import Image from "next/image";
import Header from "../component/header";
import NavBar from "@/component/NavBar";
import Banner from "@/component/banner2";

export default function Deals() {
  const deals = [
    {
      restaurantName: "chef Burgers London",
      Off: "-40%",
      imagepath: "/assets/icons/Rectangle8.png",
    },
    {
      restaurantName: "Grand Ai Cafe London",
      Off: "-20%",
      imagepath: "/assets/icons/Rectangle.png",
    },
    {
      restaurantName: "Grand Ai Cafe London",
      Off: "-17%",
      imagepath: "/assets/icons/Rectangle8.png",
    },
  ];
  return (
    <div className=" max-w-[1528px] w-full mx-auto mt-[54px]">
      <div className=" flex  justify-between  items-center">
        <h1 className=" font-[Poppins] font-[700] text-[32px] leading-[100%] tracking-[0em] text-[#000000]">
          Up to -40% 🎊 Order.uk exclusive deals
        </h1>
        <div className="  max-w-[537px] w-full flex  justify-between">
          <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
            Vegan
          </button>
          <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
            Sushi
          </button>
          <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
            Pizza & Fast food
          </button>
          <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
            Others
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[20px] mt-[60px]">
        {deals.map((deal, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${deal.imagepath})` }}
            className="  bg-cover bg-center relative rounded-[12px] overflow-hidden flex flex-col   gap-[160px] "
          >
            {" "}
            <div className=" max-w-[88px] w-full min-h-[66px]  h-full bg-[#03081F]  rounded-b-[12px]  ml-[388px]  flex justify-center items-center">
              <h1 className="font-[Poppins] font-[700] text-[18px] leading-[100%] tracking-[0em] text-white">
                {deal.Off}
              </h1>
            </div>
            <div className="  z-50 ml-[48px] mb-[36px] ">
              <h1 className="font-[Poppins] font-[500] text-[18px] leading-[100%] tracking-[0em] text-[#FC8A06]">
                Restaurant
              </h1>
              <h1 className="font-[Poppins] font-[700] text-[24px] leading-[100%] tracking-[0em] text-[#FFFFFF]">
                {deal.restaurantName}
              </h1>
            </div>
            <div className="absolute  w-[496px] h-[325px] left-[0px] top-[0px] rounded-[12px] [background:linear-gradient(245.7deg,rgba(255,255,255,0)_0.94%,rgba(3,8,31,0.19)_51.68%,rgba(3,8,31,0.89)_87.9%)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
