import React from 'react';
import Image from "next/image";

export default function RestInfo() {
  const restaurantInfo = [
    {
      category: "Delivery Information",
      icon: "/assets/icons/Tracking.svg",
      details: [
        { day: "Monday", hours: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
        { day: "Tuesday", hours: "8:00 AM–3:00 AM" },
        { day: "Wednesday", hours: "8:00 AM–3:00 AM" },
        { day: "Thursday", hours: "8:00 AM–3:00 AM" },
        { day: "Friday", hours: "8:00 AM–3:00 AM" },
        { day: "Saturday", hours: "8:00 AM–3:00 AM" },
        { day: "Sunday", hours: "8:00 AM–12:00 AM" },
        { note: "Estimated time until delivery: 20 min" },
      ],
    },
    {
      category: "Contact Information",
      icon: "/assets/icons/Id.svg",
      details: [
        { note: "If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request." },
        { phone: "+934443-43" },
        { website: "http://mcdonalds.uk/" },
      ],
    },
    {
      category: "Operational Times",
      icon: "/assets/icons/Clock.svg",
      details: [
        { day: "Monday", hours: "8:00 AM–3:00 AM" },
        { day: "Tuesday", hours: "8:00 AM–3:00 AM" },
        { day: "Wednesday", hours: "8:00 AM–3:00 AM" },
        { day: "Thursday", hours: "8:00 AM–3:00 AM" },
        { day: "Friday", hours: "8:00 AM–3:00 AM" },
        { day: "Saturday", hours: "8:00 AM–3:00 AM" },
        { day: "Sunday", hours: "8:00 AM–3:00 AM" },
      ],
    },
  ];

  return (
    <div className="max-w-[1528px]  min-h-[659px] w-full rounded-[12px]  flex flex-row mx-auto mt-[151px] shadow-[5px_5px_14px_0px_rgba(0,0,0,0.25)] bg-[#FBFBFB]">
      <div className=' flex flex-wrap justify-between items-center w-full'>
        {restaurantInfo.map((section, index) => (
          <div key={index} className={` flex flex-col pt-[122px] max-w-[496px] w-full  h-full  pl-[63px] rounded-[12px] ${section.category === "Operational Times" ? "bg-black text-white" : ""
            }`}>
            <div className="flex items-center  mb-[42px]">
              <Image src={section.icon} alt={section.category} width={45} height={45} />
              <h2 className={`font-[Poppins]  ml-[11px] font-[700] text-[24px] text-[#000000] ${section.category === "Operational Times" ? "bg-black text-white" : ""}`}>{section.category}</h2>
            </div>

            <div className="flex flex-col gap-[20px]">
              {section.details.map((item, idx) => (
                <div key={idx} className="flex ">
                  {item.day && <span className="font-[Poppins] font-[700] text-[18px]">{item.day}:</span>}
                  {item.hours && <span className="font-[Poppins] text-[18px]">{item.hours}</span>}
                  {item.note && <span className="font-[Poppins] text-[18px]">{item.note}</span>}
                  {item.phone && <span className="font-[Poppins] text-[18px]">Phone: {item.phone}</span>}
                  {item.website && <span className="font-[Poppins] font-[700] text-[18px]">Website: {item.website}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>   </div>
  );
}