'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { propertyData } from '@/data/propertyData';
import PropertyCard from '../dashboard/property/PropertyCard';

const Banner = () => {
  return (
    <div className="relative mt-4 w-full overflow-hidden">
      {/* Banner Image */}
      <Image
        src="/banner-sakk.jpg"
        alt="Real Estate Banner"
        width={1920}
        height={736}
        className="w-full h-auto object-cover"
        priority
      />

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
              className="h-[500px] md:h-[1000px] w-[400px]"
            >
              {propertyData.map((property: any, index) => (
                <SwiperSlide key={index}>
                  <PropertyCard property={property} />
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