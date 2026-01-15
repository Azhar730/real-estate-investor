import { Button } from "@/components/ui/button";
import { propertyData } from "@/data/propertyData";
import { Check, Shield, Calendar, Lock, CircleCheckBig } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../../home/PropertyCard";
import { Autoplay, Mousewheel } from "swiper/modules";

export default function BuyerProfileProperty() {
  return (
    <div className="bg-[#2c2a2a] p-4 rounded-lg">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertyData.map((property: any, index) => (
          <SwiperSlide key={index}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
}