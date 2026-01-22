"use client";
import { propertyData } from "@/data/propertyData";
import { SwiperSlide } from "swiper/react";
import PropertyCard from "../dashboard/property/PropertyCard";

function FeaturedProperties() {
  return (
    <>
      <div className="my-4 p-4 rounded-lg">
        <h1 className="text-xl my-6 px-4">Featured Properties</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyData?.slice(0,4)?.map((property: any, index) => (
            <SwiperSlide key={index}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedProperties;
