"use client"
import PropertyCard from "@/components/modules/dashboard/property/PropertyCard";
import { propertyData } from "@/data/propertyData";
import { SwiperSlide } from "swiper/react";

function Save() {
    return (<><div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {propertyData.map((property: any, index) => (
            <SwiperSlide key={index}>
                <PropertyCard property={property} />
            </SwiperSlide>
        ))}
    </div></>);
}

export default Save;