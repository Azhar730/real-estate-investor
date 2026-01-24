"use client";

import { propertyData } from "@/data/propertyData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import PropertyCard from "../dashboard/property/PropertyCard";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavButtons } from "../swiper-nav/SwiperNavButtons";

function FeaturedProperties() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="my-4 p-4 rounded-lg">
      <h1 className="text-xl my-6 px-4 font-semibold">
        Featured Properties
      </h1>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {propertyData.map((property: any, index: number) => (
            <SwiperSlide key={index}>
              <div
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              >
                <PropertyCard property={property} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedProperties;


