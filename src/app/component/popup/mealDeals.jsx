"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function MealDeals() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const items = [
    {
      icon: "/assets/PopupImage/pizzaicon.svg",
      name: "Margherita",
    },
  ];
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const toppingCategories = [
    {
      id: 1,
      category: "Vegetable Toppings",
      icon: "/assets/PopupImage/Carrot.svg",
      items: [
        { id: 1, name: "Cheese", selected: true },
        { id: 2, name: "Green peppers", selected: false },
        { id: 3, name: "Tomato", selected: false },
        { id: 4, name: "Mushrooms", selected: false },
        { id: 5, name: "Sweetcorn", selected: false },
        { id: 6, name: "Jalapenos", selected: false },
        { id: 7, name: "Olives", selected: false },
        { id: 8, name: "Pineapples", selected: false },
        { id: 9, name: "Onions", selected: true },
      ],
    },
    {
      id: 2,
      category: "Meat Toppings",
      icon: "/assets/PopupImage/Meat.svg",
      items: [
        { id: 1, name: "Chicken", selected: false },
        { id: 2, name: "Beef", selected: false },
        { id: 3, name: "Salami", selected: false },
        { id: 4, name: "Pepperoni", selected: false },
        { id: 5, name: "Chicken Tikka", selected: true },
        { id: 6, name: "Fish", selected: false },
      ],
    },
    {
      id: 3,
      category: "Seafood Toppings",
      icon: "/assets/PopupImage/Whole Fish.svg",
      items: [
        { id: 1, name: "Tuna", selected: true },
        { id: 2, name: "Anchovies", selected: false },
        { id: 3, name: "Prawns", selected: false },
      ],
    },
  ];
  const crumbs = [
    { name: "Special Offers" },
    { name: "Meal Deal 1" },
    { name: "Customise Pizza 1" },
    { name: "Instructions" },
  ];
  const [step, setStep] = useState(1);

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/50">
      <div className="relative max-w-[1270px] h-[1986px] w-full scroll-auto rounded-[12px] bg-white ">
        <button
          onClick={() => router.push("/")}
          className="absolute z-50 -top-10 -right-14 w-[116px] h-[116px] bg-[#FC8A06] rounded-full flex items-center justify-center rotate-180"
          aria-label="Close"
        >
          <Image
            width={55}
            height={55}
            src="/assets/PopupImage/Close.svg"
            alt=""
          />
        </button>

        <Image
          src="/assets/PopupImage/Rectangle 53.png"
          alt=""
          width={1270}
          height={280}
          className="w-full"
        />

        <div className="flex items-center justify-between px-[113px] py-4">
          <div className="flex items-center gap-3">
            <nav className="flex items-center space-x-2 text-[14px] font-[600] text-[#03081F]">
              {crumbs.slice(0, step + 1).map((crumb, index) => (
                <div key={index} className="flex items-center ">
                  <h1

                    className="text-[#03081F] font-[700]">
                    <p className=" ml-[11px] font-poppins font-[700] text-[24px] leading-[58px]">{crumb.name}</p>
                  </h1>
                  {index < step && (
                    <span className="font-[Poppins] ml-[18px] font-[700] text-[24px] leading-[58px]">{">"}</span>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-[1045px] mt-[12px] mb-[32px] px-6">
          {step == 1 && (
            <div className="  mx-auto max-w-[1045px]   mt-[36px] flex  flex-col">
              <div className=" flex justify-start ">
                {" "}
                <h1 className=" mb-[53px]  ml-[36px] font-[Poppins] font-[400] text-[32px]  leading-[40px] tracking-[0em]">
                  Please select your first Pizza
                </h1>
              </div>
              {items.map((item, id) => (
                <div
                  key={id}
                  className={`rounded-[12px] w-full flex flex-row items-center border transition-colors duration-300 
                    ${quantity > 1
                      ? "bg-[#03081F]"
                      : "bg-[#D9D9D999]/60 border-[#00000066]"
                    }`}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={113}
                    height={113}
                    className=" px-[22px] py-[28px]"
                  />
                  <div className=" w-[1px] h-[93px] bg-[#00000033]"></div>
                  <div className="flex justify-between items-center w-full">
                    <h1
                      className={` ml-[41px] font-[Poppins] font-[700]  text-[32px]  leading-[58px] tracking-[0em] ${quantity > 1 ? "text-white" : "text-[#03081F]"
                        }`}
                    >
                      {item.name}
                    </h1>
                    <div className=" mr-[27px] flex flex-row  gap-[22px] items-center">
                      <Image
                        src={
                          quantity > 1
                            ? "/assets/PopupImage/Minus (1).svg"
                            : "/assets/PopupImage/Minus.svg"
                        }
                        alt=""
                        width={45}
                        height={45}
                        onClick={decrease}
                      />
                      <div className="px-[26px] py-[17px] bg-white rounded-[12px] w-[86px] h-[92px] justify-center items-center flex ">
                        <h1 className="font-[Poppins] font-[700]  text-[32px]  leading-[58px] tracking-[0em]">
                          {quantity}
                        </h1>
                      </div>
                      <Image
                        src={
                          quantity > 1
                            ? "/assets/PopupImage/MacOS Maximize (1).svg"
                            : "/assets/PopupImage/MacOS Maximize.svg"
                        }
                        alt=""
                        width={45}
                        height={45}
                        onClick={increase}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step == 2 && (
            <div>
              <h1 className=" font-[Poppins] font-[400]  text-[32px]  leading-[40px] tracking-[0em]">
                {" "}
                Customise your chicken Pizza
              </h1>
              <div className=" flex flex-row items-center">
                <Image
                  src="/assets/PopupImage/pizzaicon.svg"
                  alt=""
                  width={118}
                  height={118}
                  className=" px-[22px] py-[28px]"
                />
                <div className=" w-[1px] h-[99px] bg-[#00000033]"></div>
                <div className="flex justify-between items-center w-full">
                  <h1
                    className={` ml-[41px] font-[Poppins] font-[700]  text-[44px]  leading-[40px] tracking-[0em] text-[#FC8A06]`}
                  >
                    Please select up to 4 options free!
                  </h1>
                </div>
              </div>

              <div className="  flex flex-col  mt-[57px] gap-[70px]">
                {toppingCategories.map((category, index) => (
                  <div
                    key={index}
                    className=" border-[1px] border-[#0000004D] relative rounded-[12px]  gap-y-[40px] gap-x-[33px] max-w-[1005px] pb-[71px] pl-[32px] pt-[95px]  grid  grid-cols-3 "
                  >
                    <div className="absolute top-[-40px] left-[49px]">
                      <div className="flex flex-row w-[467px]  justify-center  relative h-[81px] rounded-[12px] bg-[#03081F] items-center ">
                        <button className=" z-50 top-[-5px] left-[-20px]  flex justify-center absolute items-center  w-[93px] h-[93px] rounded-full bg-[#FC8A06] font-[Poppins] ">
                          <Image
                            width={45}
                            height={45}
                            alt=""
                            src={category.icon}
                          />
                        </button>
                        <h1 className="font-[Poppins] ml-[85px] font-[700] text-[32px] leading-[40px] text-white">
                          {category.category}
                        </h1>
                      </div>
                    </div>
                    {category.items.map((item, index) => (
                      <div key={index} className=" ">
                        <label htmlFor="">
                          <input type="radio" className="  hidden peer" />
                          <div className=" flex-row flex items-center gap-[11px] ">
                            <div className="w-[45px] h-[45px] border-[7px] border-[#D8D8D8] rounded-[12px] peer-checked:border-green-600 transition-all"></div>
                            <span className="font-[Poppins] font-[700] text-[32px] leading-[40px]">
                              {item.name}
                            </span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1 className=" font-[Poppins] font-[400]  text-[32px]  leading-[40px] tracking-[0em]">
                {" "}
                Customise your chicken Pizza
              </h1>
              <div className=" flex flex-row items-center">
                <Image
                  src="/assets/PopupImage/pizzaicon.svg"
                  alt=""
                  width={118}
                  height={118}
                  className=" px-[22px] py-[28px]"
                />
                <div className=" w-[1px] h-[99px] bg-[#00000033]"></div>
                <div className="flex justify-between items-center w-full">
                  <h1
                    className={` ml-[41px] font-[Poppins] font-[700]  text-[44px]  leading-[40px] tracking-[0em] text-[#FC8A06]`}
                  >
                    Please select up to 4 options free!
                  </h1>
                </div>
              </div>
              <textarea
                name=""
                id=""
                className="w-[994px] h-[419px] border-[1px] resize-none border-[#0000004D] rounded-[12px] pt-[38px] pl-[49px]"
              >
                Write your instrction here
              </textarea>
            </div>
          )}

          <div className="flex flex-row justify-between items-center mt-[32px] gap-6">
            <div className="flex flex-row items-center justify-center gap-x-[40px] rounded-[8px] min-w-[342px] h-[70px] bg-[#FC8A06CC]/80">
              <span className="font-[Poppins] font-[600] text-[20px] leading-[100%] text-white">
                Total Pay
              </span>
              <span className="font-[Poppins] font-[600] text-[32px] leading-[25px] text-white">
                £127.90
              </span>
            </div>
            <p className="font-[Poppins] text-[15px] text-[#6B7280]">
              Delivery & Tax will be calculated in the next step
            </p>
          </div>

          <div className="flex items-center ml-[520px] gap-6 mt-[32px]">
            <button
              onClick={() => setStep(step - 1)}
              className="underline font-[Poppins] font-[600] text-[20px]"
            >
              Take me Back
            </button>

            <button
              onClick={() => setStep(step + 1)}
              className="items-center w-[342px] h-[70px] mx-auto flex rounded-[8px] bg-[#028643] hover:brightness-110 "
            >
              <Image
                width={35}
                height={35}
                src="/assets/icons/Forward Button.svg"
                alt=""
                className="  ml-[20px] rotate-270  "
              />

              <span className="font-[Poppins] font-[600] mx-auto text-[20px] text-white text-center">
                {step == 3 ? "Add" : "Next Step"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
