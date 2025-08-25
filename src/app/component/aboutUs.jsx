


"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [selected, setSelected] = useState(0);
  const [selectedTab, setseletedTab] = useState("Frequent Questions");

  const questions = [
    {
      question: "How does Order.UK work?",
      answer: [
        {
          title: "Place an Order!",
          icon: "/assets/icons/order-food 1.png",
          text: "Place order through our website or mobile app."
        },
        {
          title: "Track Progress",
          icon: "/assets/icons/food 1.png",
          text: "You can track your order status with delivery time."
        },
        {
          title: "Get your Order!",
          icon: "/assets/icons/order 1.png",
          text: "Receive your order at lightning-fast speed!"
        }
      ]
    },
    {
      question: "What payment methods are accepted?",
      answer: [
        {
          title: "Card Payments",
          icon: "/assets/icons/order-food 1.png",
          text: "We accept all major debit and credit cards."
        },
        {
          title: "Cash on Delivery",
          icon: "/assets/icons/food 1.png",
          text: "Pay with cash when your food arrives."
        },
        {
          title: "Digital Wallets",
          icon: "/assets/icons/order 1.png",
          text: "Use Apple Pay,  for convenience."
        }
      ]
    },
    {
      question: "Can I track my order in real-time?",
      answer: [
        {
          title: "Live GPS Tracking",
          icon: "/assets/icons/order-food 1.png",
          text: "See exactly where your order is at any time."
        },
        {
          title: "Status Updates",
          icon: "/assets/icons/food 1.png",
          text: "Get notified when your food is prepared."
        },
        {
          title: "Estimated Delivery",
          icon: "/assets/icons/order 1.png",
          text: "We’ll give you an accurate time s."
        }
      ]
    },
    {
      question: "Are there any special discounts or promotions available?",
      answer: [
        {
          title: "Seasonal Offers",
          icon: "/assets/icons/order-food 1.png",
          text: "Enjoy discounts during holidays and special events."
        },
        {
          title: "Loyalty Rewards",
          icon: "/assets/icons/food 1.png",
          text: "Earn points with every order and redeem them for free meals."
        },
        {
          title: "Promo Codes",
          icon: "/assets/icons/order 1.png",
          text: "Use promo codes to save even more ."
        }
      ]
    },
    {
      question: "Is Order.UK available in my area?",
      answer: [
        {
          title: "Service Coverage",
          icon: "/assets/icons/food 1.png",
          text: "We deliver to most major cities and towns."
        },
        {
          title: "Check Availability",
          icon: "/assets/icons/order-food 1.png",
          text: "Enter your postcode on our website to confirm coverage."
        },
        {
          title: "Expanding Soon",
          icon: "/assets/icons/order 1.png",
          text: "We are always adding new delivery areas"
        }
      ]
    }
  ];

  return (
    <div className=" sm:max-w-[calc(100vw_-_22px)] lg:max-w-[1528px] h-full w-full lg:bg-[#D9D9D9]/30 rounded-[12px] flex flex-col  mx-auto">
      <div className="max-w-[1290px] w-full  flex flex-col justify-center items-center lg:mt-[124px] sm:mx-auto">
        <div className="flex flex-row lg:justify-between sm: justify-center w-full ">
          <h1 className="font-[700] font-[poppins] lg:text-[32px] sm:text-[26px] leading-[100%]  text-[#000000]">
            Know more about us!
          </h1>
          <div className="max-w-[643px] w-full flex justify-between sm:hidden lg:flex sm:mx-auto lg:mx-[0px]">
            {["Frequent Questions", "Who we are?", "Partner Program", "Help & Support"].map((option) => (
              <button
                key={option}
                onClick={() => setseletedTab(option)}
                className={`font-[Poppins] font-[400] text-[16px]  leading-[100%]   ${selectedTab == option ? " rounded-[120px] text-black font-[700] px-[10px] py-[18px]  border-[1px] border-[#FC8A06]  flex justify-center items-center" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>


        <div className="lg:mt-[69px] sm:mt-[46px]  lg:mb-[115px] flex flex-row lg:dark:bg-[#03081F] justify-center items-center  flex-wrap  max-w-[1290px]   w-full rounded-[12px] ">

          <div className="flex  flex-col items-center justify-center  lg:mt-[78px] lg:mb-[115px]  sm:mb-[53px] gap-[10px]  max-w-[474px]  w-full ">
            {questions.map((q, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`items-center max-w-[352px] w-full  h-[62px] rounded-[120px] font-[Poppins] font-[700] text-[18px] tracking-[-0.02em] leading-[100%] ${selected === index
                  ? "bg-[#FC8A06] dark: text-black  "
                  : "bg-transparent text-black lg:dark:text-white hover:bg-[#FC8A06]/40"
                  }`}
              >
                {q.question}
              </button>
            ))}
          </div>

          <div className=" lg:ml-[33px] flex flex-col   rounded-[12px] lg:pt-[0px] sm:pt-[62px] items-center dark:bg-[#03081F]">
            <div className="flex   flex-row  flex-wrap justify-center gap-x-[20px] sm:gap-y-[34px]  max-w-[815px]  w-full">
              {questions[selected].answer.map((ans, index) => (
                <div
                  key={index}
                  className="flex flex-col p-[25px] lg:mt-[88px] bg-[#D9D9D9] items-center justify-between rounded-[12px]  max-w-[238px] w-full h-[285px] text-center "
                >   <h3 className=" font-[Poppins] font-[700] text-[18px] tracking-[-0.02em] leading-[100%] dark:text-[#03081F]">{ans.title}</h3>
                  <Image
                    src={ans.icon}
                    alt={ans.title}
                    width={128}
                    height={128}

                  />

                  <p className="text-[#000000] font-[Poppins] font-[500] text-[16px] tracking-[-0.02em] leading-[25px] text-center ">{ans.text}</p>
                </div>

              ))}

            </div> <p className="text-[#000000] font-[Poppins] font-[400] text-[18px] tracking-[-0.02em]  mt-[25px]  max-w-[700px] text-center dark:text-white sm:px-[37px] lg:px-[0px]  sm:pb-[43px] lg:pb-[0px]">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
          </div>

        </div>
      </div>

    </div>
  );
}