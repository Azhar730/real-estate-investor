"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { propertyData } from "@/data/propertyData";
import PropertyCard from "../dashboard/property/PropertyCard";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import PropertyMap from "@/components/main/PropertyMap";

interface BannerProps {
  properties: typeof propertyData;
  selectedCategory: string;
}

const Banner = ({ properties ,selectedCategory}: BannerProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-4 w-full overflow-hidden">
      <PropertyMap
      selectedCategory={selectedCategory}
      properties={properties}  />

      {/* Cards Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-full mx-auto h-full flex items-center">
          <div className="w-full md:w-96 pl-4 md:pl-8 lg:pl-16 pointer-events-auto">
            <Swiper
              direction="vertical"
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              mousewheel={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Mousewheel]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="h-125 md:h-250 w-100"
            >
              {properties.map((property: any) => (
                <SwiperSlide key={property.id}>
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
      </div>
    </div>
  );
};

export default Banner;