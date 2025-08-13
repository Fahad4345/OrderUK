// import Image from "next/image";

// export default function AboutUs() {
//   const questions = [
//     {
//       question: "How does Order.UK work?",
//       answer: [
//         {
//           title1: "Place an Order!",
//           icon1: "/assets/icons/order-food 1.png",
//           text1:"Place order through ourwebsite or Mobile app"
        
//         },
//          {
//           title2: "Track Progress",
//           icon2: "/assets/icons/food 1.png",
//           text2:"Your can track your orderstatus with delivery time"
        
//         }
//          ,
//          {
//           title3: "Get your Order!",
//           icon3: "/assets/icons/order 1.png",
//           text3:"Receive your order at alighting fast speed!"
        
//       }
//       ]
//     },
//     //  {
//     //   question: "What payment methods are accepted?",
//     //   answer: [
//     //     {
//     //       title1: "",
//     //       icon1: "",
//     //       text1:""
        
//     //     },
//     //      {
//     //       title2: "",
//     //       icon2: "",
//     //       text2:""
        
//     //     }
//     //      ,
//     //      {
//     //       title3: "",
//     //       icon3: "",
//     //       text3:""
        
//     //   }
//     //   ]
//     // },
//     //   {
//     //   question:    "Can I track my order in real-time?",
//     //   answer: [
//     //     {
//     //       title1: "",
//     //       icon1: "",
//     //       text1:""
        
//     //     },
//     //      {
//     //       title2: "",
//     //       icon2: "",
//     //       text2:""
        
//     //     }
//     //      ,
//     //      {
//     //       title3: "",
//     //       icon3: "",
//     //       text3:""
        
//     //   }
//     //   ]
//     // },
//     //    {
//     //   question:    "Are there any special discounts orpromotions available?",
//     //   answer: [
//     //     {
//     //       title1: "",
//     //       icon1: "",
//     //       text1:""
        
//     //     },
//     //      {
//     //       title2: "",
//     //       icon2: "",
//     //       text2:""
        
//     //     }
//     //      ,
//     //      {
//     //       title3: "",
//     //       icon3: "",
//     //       text3:""
        
//     //   }
//     //   ]
//     // },
//     //     {
//     //   question:"Is Order.UK available in my area?",
//     //   answer: [
//     //     {
//     //       title1: "",
//     //       icon1: "",
//     //       text1:""
        
//     //     },
//     //      {
//     //       title2: "",
//     //       icon2: "",
//     //       text2:""
        
//     //     }
//     //      ,
//     //      {
//     //       title3: "",
//     //       icon3: "",
//     //       text3:""
        
//     //   }
//     // ]},
   


    
//   ];
//   return (
//     <div className="max-w-[1528px] w-full bg-[#D9D9D9]/30 rounded-[12px] flex flex-col px-[248px] py-[120px]">
//       <div className=" flex flex-row justify-between">
//         <h1 className="font-[700] font-[poppins] text-[32px] leading-[100%] tracking-[0em] text-[#000000]">
//           Know more about us!
//         </h1>
//         <div className="  max-w-[537px] w-full flex  justify-between">
//           <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
//             Vegan
//           </button>
//           <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
//             Sushi
//           </button>
//           <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
//             Pizza & Fast food
//           </button>
//           <button className="font-[Poppins] font-[400] text-[16px] leading-[100%] tracking-[0em]">
//             Others
//           </button>
//         </div>
//       </div>
//       <div className=" mt-[69px] flex flex-row ">
//         <div className=" flex flex-col gap-[34px]">
//           {questions.map((question, index) => (
//             <div key={index} className="">
//               <button className=" items-center max-w-[346px] w-full h-[62px] rounded-[120px]  bg-[#FC8A06] font-[Poppins] font-[700] text-[18px] tracking-[-0.02em] leading-[100%] text-[#000000]">
//                 {question}
//               </button>
//               <h1 className="font-[Poppins] font-[700] text-[18px] tracking-[-0.02em] leading-[100%] text-[#000000]"></h1>
//             </div>
//           ))}
//         </div>
//         <div className=" flex flex-col">
//           {questions[0].answer.map((answer, index) => (
//             <div key={index} className=" flex flex-row gap-[20px] mt
//           <div className=" flex flex-row">
//             <div>
//               <h1></h1>
//               <Image />
//               <p></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [selected, setSelected] = useState(0);

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
        icon:"/assets/icons/food 1.png",
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
    <div className="max-w-[1528px] min-h-[882px] h-full w-full bg-[#D9D9D9]/30 rounded-[12px] flex flex-col  ">
      <div className="max-w-[1290px] w-full  mt-[124px] ml-[138px]">
        <div className="flex flex-row justify-between">
        <h1 className="font-[700] font-[poppins] text-[32px] leading-[100%] text-[#000000]">
          Know more about us!
        </h1>
        <div className="max-w-[643px] w-full flex justify-between">
          {["Frequent Questions","Who we are?","Partner Program", "Help & Support"].map((option) => (
            <button
              key={option}
              className="font-[Poppins] font-[400] text-[16px] leading-[100%]"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      
      <div className="mt-[69px] flex flex-row    max-w-[1290px]  max-h-[526px] w-full rounded-[12px]  bg-[#FFFFFF]">
    
        <div className="flex flex-col items-center  mt-[78px] mb-[115px]  gap-[10px]  max-w-[474px]  w-full ">
          {questions.map((q, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`items-center max-w-[352px] w-full h-[62px] rounded-[120px] font-[Poppins] font-[700] text-[18px] tracking-[-0.02em] leading-[100%] ${
                selected === index
                  ? "bg-[#FC8A06] text-black  "
                  : "bg-transparent text-black hover:bg-[#FC8A06]/40"
              }`}
            >
              {q.question}
            </button>
          ))}
        </div>

          <div className=" ml-[33px] flex flex-col items-center">
            <div className="flex   flex-row justify-center gap-x-[20px]  max-w-[815px]  w-full">
          {questions[selected].answer.map((ans, index) => (
            <div
              key={index}
              className="flex flex-col p-[25px] mt-[88px] bg-[#D9D9D9] items-center justify-between rounded-[12px]  max-w-[238px] w-full h-[285px] text-center "
            >   <h3 className="font-[Poppins] font-[700] text-[18px] tracking-[-0.02em] leading-[100%] ">{ans.title}</h3>
              <Image
                src={ans.icon}
                alt={ans.title}
                width={128}
                height={128}
                
              />
           
              <p className="text-[#000000] font-[Poppins] font-[500] text-[16px] tracking-[-0.02em] leading-[25px] text-center ">{ans.text}</p>
            </div>
            
          ))}
         
        </div> <p className="text-[#000000] font-[Poppins] font-[400] text-[18px] tracking-[-0.02em]  mt-[25px]  max-w-[700px] text-center">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
       </div>
        
      </div>
     </div>
      
    </div>
  );
}