import Image from "next/image";
import Header from "./header";
import NavBar from "@/app/component/NavBar";
import Banner from "@/app/component/banner2";
import Deals from "@/app/component/deals";

export default function Category() {
  let category = [
    {
      category: "Burger& Fast food",
      totalRestaurant: 21,
      imagepath: "/assets/icons/fastfood.png",
    },
    {
      category: "Salads",
      totalRestaurant: 21,
      imagepath: "/assets/icons/Salad.png",
    },
    {
      category: "Pasta & Casuals",
      totalRestaurant: 21,
      imagepath: "/assets/icons/pasta.png",
    },
    {
      category: "Pizza",
      totalRestaurant: 21,
      imagepath: "/assets/icons/pizza.png",
    },
    {
      category: "Breakfast",
      totalRestaurant: 21,
      imagepath: "/assets/icons/Breakfast.png",
    },
    {
      category: "Soup",
      totalRestaurant: 21,
      imagepath: "/assets/icons/soup.png",
    },
  ];
  return (
    <div className=" max-w-[1528px]  mt-[63px] w-full mx-auto flex flex-col  sm:bg-[#D9D9D980]/50  lg:bg-transparent">
      <div>
        <h1 className=" font-[Poppins] font-[700] lg:text-[32px] sm:text-[16px]   sm:ml-[21px] lg:ml-[0px] sm:mt-[28px] lg:mt-[0px] leading-[100%] tracking-[0em] text-[#000000]">
          Order.uk Popular Categories 🤩
        </h1>
      </div>
      <div className=" flex flex-row flex-wrap justify-center items-center gap-[20px]  sm:mb-[44px] xl:mb-[0px] mt-[51px]">
        {category.map((categorys, index) => (
          <div
            key={index}
            className=" border-b-[1px]  border-[#0000001A] flex flex-col lg:max-w-[238px] lg:max-h-[266px] sm:max-w-[189px] sm:max-h-[212px] w-full bg-cover bg-center relative rounded-[12px] overflow-hidden "
          >
            <div>
              <Image
                width={720}
                height={600}
                src={categorys.imagepath}
                alt=""
                className="lg:w-[238px] lg:h-[203px] sm:w-[189px] sm:h-[162px] bg-cover bg-center"
              />
            </div>
            <div className=" bg-[#000000]/10  sm:pl-[18px]  lg:pl-[22px]  pb-[10px]">
              <h1 className="font-[Poppins] font-[700] lg:text-[18px] sm:text-[13px]   lg:mt-[9px] sm:mt-[7px] leading-[100%] tracking-[0em] lg:text-[#03081F] sm:text-[#FC8A06]">
                {categorys.category}
              </h1>
              <h1 className="font-[Poppins] font-[400]  mb-[10px] lg:mt-[9px] sm:mt-[7px] lg:text-[18px] sm:text-[13px]  leading-[100%] tracking-[0em] sm:text-black lg:text-[#FC8A06]">
                {categorys.totalRestaurant} Restaurants
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
