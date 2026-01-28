"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { propertyData } from "@/data/propertyData";
import PropertyCard from "../dashboard/property/PropertyCard";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import PropertyMap from "@/components/main/PropertyMap";
import Navbar from "@/components/shared/Navbar";

interface BannerProps {
  properties: typeof propertyData;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Banner = ({
  properties,
  selectedCategory,
  setSelectedCategory,
}: BannerProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMapActive, setIsMapActive] = useState(false);
  const [isMapHovered, setIsMapHovered] = useState(false);
  return (
    <div className="relative w-full">
      {/* ✅ Navbar ONLY inside Banner */}
      <div className="sticky top-0 z-50">
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div
        className="relative w-full overflow-hidden mt-6"
        onMouseEnter={() => setIsMapHovered(true)}
        onMouseLeave={() => {
          setIsMapHovered(false);
          setIsMapActive(false);
        }}
      >
        <PropertyMap
          selectedCategory={selectedCategory}
          properties={properties}
          isMapActive={isMapActive}
        />

        {isMapHovered && !isMapActive && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center 
                      transition-all"
          >
            <button
              onClick={() => setIsMapActive(true)}
              className="px-6 py-3 text-lg font-semibold rounded-xl
                       border border-white shadow-xl
                       backdrop-blur-md bg-black/40
                        transition cursor-pointer"
            >
              Click to Interact map
            </button>
          </div>
        )}

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
    </div>
  );
};

export default Banner;
