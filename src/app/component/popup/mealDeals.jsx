"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";


export default function MealDeals({ onClose }) {
  const [selectedoption, setselectedoption] = useState(false);
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

        { id: 2, name: "Tomato", selected: false },
        { id: 3, name: "Mushrooms", selected: false },
        { id: 4, name: "Sweetcorn", selected: false },
        { id: 5, name: "Jalapenos", selected: false },
        { id: 6, name: "Olives", selected: false },
        { id: 7, name: "Pineapples", selected: false },
        { id: 8, name: "Onions", selected: true },
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
    <div onClick={(e) => onClose()} className="fixed inset-0 overflow-y-scroll z-70 flex items-center justify-center bg-black/50">
      <div onClick={(e) => e.stopPropagation()} className="relative  sm:max-w-[392px] sm:max-h-[1099px] lg:max-w-[900px] lg:max-h-[1986px] w-full  rounded-[12px] bg-white ">
        <button
          onClick={() => onClose()}
          className="absolute z-50 -top-10 -right-14 lg:w-[116px] lg:h-[116px] sm:w-[80px] sm:h-[80px] bg-[#FC8A06] rounded-full flex items-center justify-center rotate-180"
          aria-label="Close"
        >
          <Image
            width={55}
            height={55}
            src="/assets/PopupImage/Close.svg"
            alt=""
            className="lg:w-[55px] lg:h-[55px] sm:w-[38px] sm:h-[38px]"
          />
        </button>

        <Image
          src="/assets/PopupImage/Rectangle 53.png"
          alt=""
          width={1270}
          height={280}
          className="lg:w-[1270px] lg:max-h-[280px] sm:w-[392px] sm:max-h-[188px]"
        />

        <div className="flex items-center justify-between sm:hidden lg:px-[113px] lg:py-4">
          <div className="flex items-center gap-3">
            <nav className="flex items-center space-x-2 text-[14px] font-[600] text-[#03081F]">
              {crumbs.slice(0, step + 1).map((crumb, index) => (
                <div key={index} className="flex items-center ">
                  <h1

                    className="text-[#03081F] font-[700]">
                    <p className=" ml-[11px] font-poppins font-[700] lg:text-[24px] sm:text-[15px] leading-[58px]">{crumb.name}</p>
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
            <div className="  mx-auto max-w-[1045px]   lg:mt-[36px] flex  flex-col">
              <h1 className=" font-[Poppins]  sm:flex lg:hidden sm:font-[700]  text-[24px]   leading-[58px] tracking-[0em]">
                {" "}
                Special Offer{" > "}
              </h1>
              <h1 className=" font-[Poppins] lg:font-[400] sm:font-[700]   sm:flex lg:hidden lg:text-[32px] sm:text-[34px]  leading-[58px] tracking-[0em]">
                {" "}
                Meal Deal 1
              </h1>
              <div className=" flex justify-start ">
                {" "}
                <h1 className=" mb-[53px] sm:hidden lg:flex  ml-[36px] font-[Poppins] font-[400] text-[32px]  leading-[40px] tracking-[0em]">
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
                    className=" lg:w-[113px] lg:h-[113px] sm:w-[39px] sm:h-[39px] lg:px-[22px] lg:py-[28px] sm:px-[9px] sm:py-[8px]"
                  />
                  <div className=" w-[1px] h-[39px] bg-[#00000033]"></div>
                  <div className="flex justify-between items-center w-full">
                    <h1
                      className={` lg:ml-[41px] sm:ml-[12px] font-[Poppins] font-[700]  lg:text-[32px] sm:text-[15px]  leading-[58px] tracking-[0em] ${quantity > 1 ? "text-white" : "text-[#03081F]"
                        }`}
                    >
                      {item.name}
                    </h1>
                    <div className=" lg:mr-[27px] flex flex-row   sm:gap-[8px] lg:gap-[22px] items-center">
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
                        className=" lg:w-[45px] lg:h-[45px] sm:w-[35px] sm:h-[35px]"
                      />
                      <div className="lg:px-[26px] lg:py-[17px] bg-white rounded-[4px] lg:w-[86px] lg:h-[92px] sm:w-[29px] sm:h-[31px] justify-center items-center flex ">
                        <h1 className="font-[Poppins] font-[700]   sm:text-[15px] lg:text-[32px]  lg:leading-[58px] sm:leading-[18px]  tracking-[0em]">
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
                        className="lg:w-[45px] lg:h-[45px] sm:w-[35px] sm:h-[35px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step == 2 && (
            <div>
              <h1 className=" font-[Poppins]  sm:flex lg:hidden sm:font-[700]  text-[24px]   leading-[58px] tracking-[0em]">
                {" "}
                Special Offer{" > "}
              </h1>
              <h1 className=" font-[Poppins] lg:font-[400] sm:font-[700]  lg:text-[32px] sm:text-[34px]  leading-[40px] tracking-[0em]">
                {" "}
                Customise  Pizza
              </h1>
              <div className=" flex flex-row items-center mt-[32px]">
                <Image
                  src="/assets/PopupImage/pizzaicon.svg"
                  alt=""
                  width={118}
                  height={118}
                  className="  sm:mr-[36px]"
                />
                <div className=" w-[1px] h-[99px] bg-[#00000033]"></div>
                <div className="flex justify-between items-center w-full">
                  <h1
                    className={` ml-[41px] font-[Poppins] font-[700]  lg:text-[44px] sm:text-[16px]  sm:text-center lg:text-start lg:leading-[40px] sm:leading-[24px] tracking-[0em] text-[#FC8A06]`}
                  >
                    Please select up to 4 options free!
                  </h1>
                </div>
              </div>

              <div className="  flex flex-col   sm:mt-[51px] lg:mt-[57px] lg:gap-[70px]">
                {toppingCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`${category.category == "Meat Toppings" || category.category == "Seafood Toppings" ? " sm:hidden lg:grid" : ""}  border-[1px] border-[#0000004D] relative rounded-[12px] lg:gap-y-[40px] sm:gap-y-[13px] sm:gap-x-[35px] lg:gap-x-[33px] max-w-[1005px] lg:pb-[71px] sm:pb-[20px] lg:pl-[32px] sm:px-[20px]  sm:pt-[70px] lg:pt-[95px]  grid  lg:grid-cols-3 sm:grid-cols-2 `}
                  >
                    <div className="absolute top-[-40px] left-[49px]">
                      <div className="flex flex-row lg:w-[467px] sm:w-[276px]  justify-center  relative lg:h-[81px] sm:h-[55px] rounded-[12px] bg-[#03081F] items-center ">
                        <button className=" z-50 top-[-5px] left-[-20px]  flex justify-center absolute items-center  lg:w-[93px] lg:h-[93px] sm:w-[65px] sm:h-[65px] rounded-full bg-[#FC8A06] font-[Poppins] ">
                          <Image
                            width={45}
                            height={45}
                            alt=""
                            src={category.icon}
                            className="lg:w-[45px] lg:h-[45px] sm:w-[31px] sm:h-[31px]"
                          />
                        </button>
                        <h1 className={` font-[Poppins] lg:ml-[85px] sm:ml-[44px] font-[700] lg:text-[32px] sm:text-[18px] leading-[40px] text-white`}>
                          {category.category}
                        </h1>
                      </div>
                    </div>
                    {category.items.map((item, index) => (
                      <div key={index} className="  " onClick={() => setselectedoption(true)}>
                        <label htmlFor="" className="flex flex-row gap-[10px]">

                          <input type="radio" className="  hidden peer" />
                          {selectedoption ?
                            (<Image
                              width={35}
                              height={35}
                              src="/assets/icons/Tick Box.svg"
                              alt=""
                              className="  ml-[20px]   "
                            />)
                            :
                            (<div className="lg:w-[45px] lg:h-[45px] sm:w-[25px] sm:h-[25px] border-[7px] border-[#D8D8D8] rounded-full peer-checked:border-green-600 transition-all"></div>)

                          }
                          <div className=" flex-row flex items-center lg:gap-[23px] sm:gap-[11px] ">

                            <span className="font-[Poppins] lg:font-[700] lg:text-[32px] sm:font-[400] sm:text-[16px] leading-[40px]">
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
              <h1 className=" font-[Poppins]  sm:flex lg:hidden sm:font-[700]  text-[24px]   leading-[58px] tracking-[0em]">
                {" "}
                Special Offer{" > "}
              </h1>
              <h1 className=" font-[Poppins] lg:font-[400] sm:font-[700]  lg:text-[32px] sm:text-[34px]  leading-[40px] tracking-[0em]">
                {" "}
                Customise  Pizza
              </h1>
              <div className=" flex flex-row items-center mt-[32px]">
                <Image
                  src="/assets/PopupImage/pizzaicon.svg"
                  alt=""
                  width={118}
                  height={118}
                  className="  sm:mr-[36px]"
                />
                <div className=" w-[1px] h-[99px] bg-[#00000033]"></div>
                <div className="flex justify-between items-center w-full">
                  <h1
                    className={` ml-[41px] font-[Poppins] font-[700]  lg:text-[44px] sm:text-[16px]  sm:text-center lg:text-start lg:leading-[40px] sm:leading-[24px] tracking-[0em] text-[#FC8A06]`}
                  >
                    Add your Special request
                  </h1>
                </div>
              </div>
              <textarea
                value="Write your instrction here"
                onChange={() => { }}
                name=""
                id=""
                className="max-w-[994px] w-full lg:h-[419px] sm:h-[300px]  border-[1px] mt-[69px] resize-none border-[#0000004D] rounded-[12px] pt-[38px] pl-[49px]"
              >

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
            <p className="font-[Poppins]  sm:hidden lg:flex text-[15px] text-[#6B7280]">
              Delivery & Tax will be calculated in the next step
            </p>
          </div>

          <div className="flex  items-center lg:ml-[520px] gap-3 mt-[32px]">
            <button
              onClick={() => setStep(step - 1)}
              className="underline  w-[172px] font-[Poppins]  lg:flex  sm:hidden font-[600] text-[20px]"
            >
              Take me Back
            </button>

            <button
              onClick={() => {
                if (step < 3)
                  setStep(step + 1)
                else {
                  alert("added");

                  onClose();
                }
              }

              }
              className="items-center w-[342px] h-[70px] mx-auto flex rounded-[8px] bg-[#028643] hover:brightness-110 "
            >
              <Image
                width={35}
                height={35}
                src="/assets/icons/ForwardButtonWhite.svg"
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
