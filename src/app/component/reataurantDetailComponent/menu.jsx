import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const menu = {
    Burger: [
      {
        item: "Big Mac",
        price: 6.49,
        description:
          "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
      },
      {
        item: "Quarter Pounder",
        price: 7.99,
        description:
          "Fresh beef quarter pound patty, cheese, onions, pickles, ketchup and mustard",
      },
      {
        item: "Cheeseburger",
        price: 4.99,
        description:
          "Beef patty with cheese, pickles, onions, ketchup and mustard on a regular bun",
      },
      {
        item: "McDouble",
        price: 5.49,
        description:
          "Two beef patties, cheese, pickles, onions, ketchup and mustard on a regular bun",
      },
      {
        item: "Bacon Burger",
        price: 6.99,
        description:
          "Juicy beef patty with crispy bacon, cheese, lettuce, tomato and mayo",
      },
      {
        item: "Fish Fillet",
        price: 5.99,
        description:
          "Wild-caught fish fillet, cheese and tartar sauce on a steamed bun",
      },
    ],
    Fries: [
      {
        item: "Small Fries",
        price: 2.99,
        description:
          "Golden and crispy McDonald's World Famous Fries, lightly salted",
      },
      {
        item: "Medium Fries",
        price: 3.49,
        description:
          "Our signature fries in medium size, perfectly seasoned with salt",
      },
      {
        item: "Large Fries",
        price: 3.99,
        description:
          "Large portion of our famous golden fries, hot and freshly prepared",
      },
      {
        item: "Curly Fries",
        price: 3.79,
        description: "Seasoned curly cut fries with a special blend of spices",
      },
      {
        item: "Sweet Potato Fries",
        price: 4.29,
        description: "Crispy sweet potato fries with a touch of sea salt",
      },
      {
        item: "Loaded Fries",
        price: 5.99,
        description:
          "Fries topped with melted cheese, bacon bits and green onions",
      },
    ],
    ColdDrink: [
      {
        item: "Coca Cola",
        price: 2.49,
        description: "Classic Coca-Cola, ice cold and refreshing",
      },
      {
        item: "Sprite",
        price: 2.49,
        description: "Crisp lemon-lime flavored soda, caffeine-free",
      },
      {
        item: "Orange Juice",
        price: 2.99,
        description: "100% pure orange juice, no added sugar",
      },
      {
        item: "Iced Coffee",
        price: 3.29,
        description: "Premium roast coffee served over ice with milk",
      },
      {
        item: "Milkshake",
        price: 4.49,
        description:
          "Thick and creamy vanilla milkshake topped with whipped cream",
      },
      {
        item: "Water",
        price: 1.99,
        description: "Pure bottled water, refreshing and hydrating",
      },
    ],
  };

  return (
    <div>
      {Object.keys(menu).map((category, index) => (
        <div
          className=" flex flex-wrap gap-[40px] mt-[60px] max-w-[1528px] w-full mx-auto  "
          key={index}
        >
          <h1
            key={index}
            className={`font-[Poppins] 
                     ${category === "Burger" ? "mt-[71px]  text-black" : ""}
                     ${category === "Fries" ? "mt-[124px]" : ""}
                     ${
                       category === "ColdDrink" ? "mt-[119px]" : ""
                     } font-[700] text-[44px] leading-[100px] tracking-[0em] text-[#FC8A06]`}
          >
            {category}
          </h1>
          <div className=" flex flex-wrap gap-y-[40px] gap-x-[20px]">
            {menu[category].map((items, idx) => (
                 <Link  key={idx} rel="stylesheet" href="/pages/order"><div
               
                className=" flex-row flex   justify-center items-center max-w-[496px] w-full  max-h-[245px] rounded-[12px] h-full shadow-[5px_5px_34px_0px_rgba(0,0,0,0.25)] "
              >
                <div className="flex flex-col gap-[10px] max-w-[220px] w-full">
                  <h1 className="font-[Poppins] font-[600] text-[20px] leading-[23px] tracking-[0em] text-[#000000]">
                    {items.item}
                  </h1>
                  <h1 className="font-[Poppins] font-[400] text-[14px] leading-[25px] tracking-[0em] text-[#000000]">
                    {items.description}
                  </h1>
                  <h1 className="font-[Poppins] font-[700] text-[18px] leading-[100%] tracking-[0em] text-[#000000]">{`GBP ${items.price}`}</h1>
                </div>
                <div className=" relative">
                  <Image
                    width={203}
                    height={199}
                    src="/assets/icons/burger.png"
                    alt=""
                    className=" w-[203px] h-[199px]"
                  />
                  <div className="absolute flex justify-center item-center w-[97px] h-[89px] right-[0px] bottom-[0px] z-50 bg-[#FFFFFF]/90 rounded-tl-[46px]">
                    <Image
                      width={49}
                      height={49}
                      src="/assets/icons/Plus.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div></Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
