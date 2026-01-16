'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ShieldCheck, Trophy, ChevronLeft, ChevronRight, Verified } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from 'next/link';

// TypeScript টাইপ (আপনার propertyData থেকে নেয়া)
type Property = {
  images: string[];
  badge?: string;
  verified?: boolean;
  trophy?: boolean;
  price: string;
  title: string;
  subtitle: string;
  roi: string;
  area: string;
  // id যোগ করা ভালো (লিঙ্কের জন্য)
  id?: string | number;
};

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="relative bg-neutral-800 opacity-100 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/40 hover:border-yellow-500 shadow-2xl p-0 h-full">
      {/* Image Slider */}
      <div className="relative h-64">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          loop={true}
          className="h-full"
        >
          {property.images.map((img, imgIndex) => (
            <SwiperSlide key={imgIndex}>
              <Image
                src={img}
                alt={`${property.title} - ${imgIndex + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </SwiperSlide>
          ))}

          <button className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/0 rounded-full p-1">
            <ChevronLeft className="w-6 h-6 text-white cursor-pointer" />
          </button>
          <button className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/0 rounded-full p-1">
            <ChevronRight className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </Swiper>

        {/* Badges */}
        {property.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              {property.badge}
            </span>
          </div>
        )}
        {property.verified && (
          <div className="absolute top-4 left-4 z-10">
            <span className="flex items-center gap-1">
              <Image
              src={'/verified-badge.svg'}
              alt='verified-badge'
              height={60}
              width={60}
              />
            </span>
          </div>
        )}
        {property.trophy && (
          <div className="absolute bottom-2 right-4 z-10">
            <div className="bg-yellow-500 rounded-full p-2 shadow-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <Link href={`/property/${property.id || '1'}`} className="px-3 py-0 -mt-3 block">
        <h3 className="text-2xl font-bold text-white">{property.price}</h3>
        <p className="text-lg text-white mb-1">{property.title}</p>
        <p className="text-sm text-gray-300 mt-1">{property.subtitle}</p>

        <div className="mt-2 relative">
          <svg width="100%" height="60" viewBox="0 0 220 60" className="overflow-visible">
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points="10,45 40,40 80,35 120,28 160,32 200,25"
            />
            <polygon fill="#10b981" points="200,25 190,20 190,30" />
          </svg>
        </div>

        <div className="flex items-center gap-x-1 mt-4">
          <FaArrowTrendUp className="text-green-400 font-semibold text-lg" />
          <span className="text-gray-400 font-semibold text-lg">{property.roi}</span>
          <span className="text-gray-400 text-sm ml-4">{property.area}</span>
        </div>
      </Link>
    </Card>
  );
}