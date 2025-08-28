"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
      name: "Jane Doe",
      location: "East London",
      rating: 4,
      date: "1st October, 2023",
      timeIcon: "/assets/icons/Time Span.svg",
      text: "Good service, but my fries were a bit cold. Still overall a nice experience!",
    },
    {
      avatar: "/assets/icons/custPic.svg",
      name: "John Smith",
      location: "Central London",
      rating: 5,
      date: "10th October, 2023",
      timeIcon: "/assets/icons/Time Span.svg",
      text: "Amazing! Fresh food and quick service. Definitely coming back again.",
    }, {
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
      name: "Jane Doe",
      location: "East London",
      rating: 4,
      date: "1st October, 2023",
      timeIcon: "/assets/icons/Time Span.svg",
      text: "Good service, but my fries were a bit cold. Still overall a nice experience!",
    },

  ];

  const swiperRef = useRef(null);

  return (
    <div className="bg-[#D9D9D9] w-full   mx-auto mt-[130px]">
      <div className=" sm:max-w-[calc(100vw_-_22px)] lg:max-w-[1528px] relative  mx-auto flex-row">

        <div className="flex   sm:flex-col lg:flex-row lg:justify-between justify-center  sm:pt-[56px] lg:pt-[92px]">
          <h1 className="font-[Poppins] font-[700] text-center lg:text-[44px] sm:text-[32px] leading-[100%] tracking-[0em] text-black">
            Customer Reviews
          </h1>
          <Image
            width={153}
            height={178}
            src="/assets/icons/Review bar.png"
            alt="Review Bar"
            className="mx-auto lg:hidden sm:flex mt-[30px]"
          />
          <div className="flex  lg:flex sm:hidden  flex-row gap-[22px]">

            <button
              className="w-[75px] h-[75px] bg-[#FC8A06] cursor-pointer rounded-full items-center justify-center flex rotate-180"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Image
                width={36}
                alt="Prev"
                height={36}
                src="/assets/icons/Back.svg"
              />
            </button>


            <button
              className="w-[75px] h-[75px] bg-[#FC8A06] rounded-full  cursor-pointer items-center justify-center flex"

            >
              <Image
                width={36}
                alt="Next"
                height={36}
                src="/assets/icons/Back.svg"
              />
            </button>
          </div>
        </div>


        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}

          spaceBetween={10}
          slidesPerView={3}

          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className=" w-full  justify-items-center flex justify-center items-center"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="flex cursor-pointer items-center justify-center sm:mt-[57px] lg:mt-[35px] lg:mb-[129px] sm:mb-[0px] ">
              <article className=" sm:min-h-[295px] bg-white flex flex-col px-[20px] pt-[44px] ">
                <div className="flex cursor-pointer flex-row justify-between">
                  <div className="flex flex-row gap-[10px]">
                    <div className="w-[54px] h-[54px] rounded-full overflow-hidden">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={54}
                        height={54}
                      />
                    </div>
                    <div className="w-[2px] h-[50px] bg-[#FC8A06]" />
                    <div className="flex flex-col">
                      <h2 className="font-[Poppins] font-[600] text-[18px] text-[#03081F]">
                        {review.name}
                      </h2>
                      <h3 className="font-[Poppins] font-[400] text-[16px] text-[#FC8A06]">
                        {review.location}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex gap-1">
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
                    <div className="flex flex-row items-center mt-1">
                      <Image
                        src={review.timeIcon}
                        alt="Time"
                        width={23}
                        height={23}
                      />
                      <p className="ml-[10px] font-[Poppins] text-[15px] text-black">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-[20px] font-[Poppins] text-[16px] leading-[27px] text-black">
                  {review.text}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex sm:flex lg:hidden flex-row mt-[23px]  justify-center pb-[49px] gap-[22px]">

          <button
            className="w-[75px] h-[75px] bg-[#FC8A06] rounded-full items-center justify-center flex rotate-180"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image
              width={36}
              alt="Prev"
              height={36}
              src="/assets/icons/Back.svg"
            />
          </button>


          <button
            className="w-[75px] h-[75px] bg-[#FC8A06] rounded-full items-center justify-center flex"

          >
            <Image
              width={36}
              alt="Next"
              height={36}
              src="/assets/icons/Back.svg"
            />
          </button>
        </div>

        <Image
          width={153}
          height={178}
          src="/assets/icons/Review bar.png"
          alt="Review Bar"
          className="absolute bottom-[-70px] left-[786px] lg:flex sm:hidden "
        />

      </div>

    </div>
  );
}