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
    <div className=" max-w-[1528px]  mt-[63px] w-full mx-auto flex flex-col">
      <div>
        <h1 className=" font-[Poppins] font-[700] text-[32px] leading-[100%] tracking-[0em] text-[#000000]">
          Order.uk Popular Categories 🤩
        </h1>
      </div>
      <div className=" flex flex-row gap-[20px] mt-[51px]">
        {category.map((categorys, index) => (
          <div
            key={index}
            className=" border-b-[1px]  border-[#0000001A] flex flex-col max-w-[238px] w-full bg-cover bg-center relative rounded-[12px] overflow-hidden "
          >
            <div>
              <Image
                width={720}
                height={600}
                src={categorys.imagepath}
                alt=""
                className="w-[238px] h-[203px] bg-cover bg-center"
              />
            </div>
            <div className=" bg-[#000000]/10">
              <h1 className="font-[Poppins] font-[700] text-[18px]   mt-[9px] ml-[22px] leading-[100%] tracking-[0em] text-[#03081F]">
                {categorys.category}
              </h1>
              <h1 className="font-[Poppins] font-[400] mt-[9px] ml-[22px] mb-[10px] text-[13px] leading-[100%] tracking-[0em] text-[#FC8A06]">
                {categorys.totalRestaurant} Restaurants
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
