import React from "react";
import Image from "next/image";

export default function CustReview() {
  const reviews = [
    {
      avatar: "/assets/icons/custPic.svg",
      name: "St Glx",
      location: "South London",
      rating: 5,
      date: "24th September, 2023",
      timeIcon: "/assets/icons/Time Span.svg",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      avatar: "/assets/icons/custPic.svg",
      name: "St Glx",
      location: "South London",
      rating: 5,
      date: "24th September, 2023",
      timeIcon: "/assets/icons/Time Span.svg",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      avatar: "/assets/icons/custPic.svg",
      name: "St Glx",
      location: "South London",
      rating: 5,
      date: "24th September, 2023",
      timeIcon: "/assets/icons/Time Span.svg",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },

  ];
  return (
    <div className="bg-[#D9D9D9] max-w-[1728px]   max-h-[600px] min-h-[600px] mx-auto mt-[130px]">
      <div className=" max-w-[1528px] mx-auto">
        <div className=" flex justify-between pt-[92px]">
          <h1 className="font-[Poppins] font-[700] text-[44px] leading-[100%] tracking-[0em] text-black">
            Customer Reviews
          </h1>
          <div className=" flex flex-row gap-[22px]">
            <button className=" w-[75px] h-[75px] bg-[#FC8A06] rounded-full items-center justify-center flex rotate-180 ">
              <Image width={36} alt="" height={36} src="/assets/icons/Back.svg" />
            </button>
            <button className=" w-[75px] h-[75px] bg-[#FC8A06] rounded-full items-center justify-center flex ">
              <Image width={36} alt="" height={36} src="/assets/icons/Back.svg" />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row  gap-[20px] max-w-[1528px] mt-[39px] mx-auto ">
            {reviews.map((review, idx) => (
              <div key={idx} className="  max-w-[496px] min-h-[274px] bg-white  flex flex-col  px-[20px] pt-[44px]">
                <div className="  flex flex-row justify-between"><div className=" flex flex-row gap-[10px]">
                  <div className="w-[54px] h-[54px] rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={54}
                      height={54}
                    />
                  </div>
                  <div className="w-[2px] h-[50px] bg-[#FC8A06]" />
                  <div className=" flex flex-col">
                    <h2 className=" font-poppins font-[600] text-[18px] leading-[21px] tracking-[0em] text-[#03081F]">
                      {review.name}
                    </h2>
                    <h2 className="font-poppins  font-[400] text-[16px] leading-[21px] tracking-[0em] text-[#FC8A06]">
                      {review.location}
                    </h2>
                  </div>
                </div>

                  <div className=" flex flex-col  items-end">
                    <div className=" flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Image
                          key={i}
                          src="/assets/icons/Star.svg"
                          alt="Star"
                          width={17}
                          height={17}
                        />
                      ))}
                    </div>
                    <div className=" flex flex-row"> {/* Date */}

                      {/* Time Icon */}
                      <div className="left-[376px] w-[23px] h-[23px]">
                        <Image
                          src={review.timeIcon}
                          alt="Time"
                          width={23}
                          height={23}
                        />

                      </div><p className="font-poppins  font-[400]  ml-[13px] leading-[21px] tracking-[0em] text-[15px] text-black">
                        {review.date}
                      </p></div>


                  </div>

                </div>


                {/* Review Text */}
                <p className="mt-[38px] font-poppins  font-[400]  text-[16px] leading-[27px] tracking-[0em] text-black">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image width={153} height={178} src="/assets/icons/Review bar.png" alt="" className="  mx-auto mt-[30px]" />

    </div>
  );
}
