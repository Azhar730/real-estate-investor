'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Check, MapPin, ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PropertyDetailsPage = () => {
    // এখানে একটা প্রপার্টির sample data রাখা হয়েছে
    const property = {
        price: 'SAR 1,250,000',
        sizeM2: '290 m²',
        sizeSqft: '3122 sqft',
        roi: '7.4%',
        title: 'Heritage Residence - Diriyah',
        location: 'Diriyah, Northwest Riyadh',
        monthlyRent: 'SAR 29,400',
        annualReturn: 'SAR 352,800',
        appreciation: '+2.1% / year',
        description: `This exclusive property stands as one of Riyadh’s most compelling investment opportunities, thoughtfully positioned in the heart of Diriyah, Northwest Riyadh—one of the Kingdom’s most rapidly developing and culturally significant districts.

The location offers exceptional connectivity to major business hubs, lifestyle destinations, and key transport corridors, making it ideal for both long-term value growth and immediate usability.

Designed with contemporary architectural principles, the property features elegant layouts, premium materials, and high-quality finishes that reflect modern urban living. Every detail has been carefully considered to ensure comfort, functionality, and aesthetic appeal, catering to discerning residents and investors alike.

Fully compliant with REGA regulations, the property provides a secure and transparent investment backed by regulatory assurance. With close proximity to Vision 2030 giga-projects, cultural landmarks, and future infrastructure developments, this property presents a rare opportunity to invest in a location poised for sustained appreciation and long-term demand.`,
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1320&h=807&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1320&h=807&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1320&h=807&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1320&h=807&fit=crop',
        ],
        mapImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=505&h=346&fit=crop',
    };

    return (
        <div className="min-h-screen bg-stone-950 text-white overflow-x-hidden">
            {/* Close Button */}
            <button className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white hover:text-gray-300 transition">
                <X className="w-5 h-5" />
                <span className="text-base">Close</span>
            </button>

            <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Image Swiper */}
                        <div className="relative rounded-3xl overflow-hidden">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    prevEl: '.custom-prev',
                                    nextEl: '.custom-next',
                                }}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="aspect-video lg:aspect-auto"
                            >
                                {property.images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <Image
                                            src={img}
                                            alt={`Property image ${i + 1}`}
                                            width={1320}
                                            height={807}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    </SwiperSlide>
                                ))}

                                {/* Custom Navigation Arrows */}
                                <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-neutral-800/80 hover:bg-neutral-700 rounded-full p-3 shadow-lg transition">
                                    <ChevronLeft className="w-8 h-8 text-white" />
                                </button>
                                <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-neutral-800/80 hover:bg-neutral-700 rounded-full p-3 shadow-lg transition">
                                    <ChevronRight className="w-8 h-8 text-white" />
                                </button>
                            </Swiper>

                            {/* Golden Visa Badge */}
                            <div className="absolute top-6 left-6">
                                <div className="bg-linear-to-b from-amber-200 to-yellow-600 rounded-lg px-4 py-6 shadow-xl">
                                    <p className="text-black text-xs font-bold text-center leading-tight">
                                        Golden<br />Visa<br />Eligible
                                    </p>
                                </div>
                            </div>

                            {/* Heart Icon */}
                            <button className="absolute bottom-6 right-6 bg-red-600 rounded-full p-4 shadow-2xl hover:bg-red-700 transition z-10">
                                <Heart className="w-8 h-8 text-white fill-white" />
                            </button>
                        </div>

                        {/* Price, Size, ROI Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Card className="bg-stone-900 border-white/10 p-4 text-center">
                                <p className="text-zinc-400 text-sm">Price</p>
                                <p className="text-2xl font-light mt-1">{property.price}</p>
                            </Card>
                            <Card className="bg-stone-900 border-white/10 p-4 text-center">
                                <p className="text-zinc-400 text-sm">Size</p>
                                <p className="text-2xl font-light mt-1">{property.sizeM2}</p>
                                <p className="text-zinc-500 text-sm">{property.sizeSqft}</p>
                            </Card>
                            <Card className="bg-stone-900 border-white/10 p-4 text-center">
                                <p className="text-zinc-400 text-sm">ROI</p>
                                <p className="text-emerald-500 text-2xl font-light mt-1">{property.roi}</p>
                                <p className="text-zinc-500 text-sm">Annual</p>
                            </Card>
                        </div>

                        {/* Title & Location */}
                        <div>
                            <h1 className="text-3xl font-light">{property.title}</h1>
                            <div className="flex items-center gap-2 mt-2 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <p>{property.location}</p>
                            </div>
                        </div>

                        {/* Payment Plan Section */}
                        <Card className="bg-stone-900/60 border-white/10 shadow-2xl p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-linear-to-b from-emerald-500 to-emerald-900 rounded-full flex items-center justify-center shadow-lg">
                                    <Check className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-xl">Payment Plan & Milestones</h2>
                            </div>

                            <p className="text-sm text-gray-400 mb-4">Select Purchase Type:</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Button className="bg-emerald-800 hover:bg-emerald-700 text-white h-12 rounded-xl shadow-lg">
                                    <Check className="w-5 h-5 mr-2" />
                                    Ready to Move
                                </Button>
                                <Button variant="outline" className="border-gray-600 text-gray-400 h-12 rounded-xl">
                                    Off-Plan
                                </Button>
                            </div>

                            <Card className="mt-6 bg-emerald-800/10 border-emerald-800/30 p-6">
                                <div className="flex items-start gap-4">
                                    <Check className="w-8 h-8 text-emerald-500 mt-1" />
                                    <div>
                                        <p className="font-medium">Property Ready for Immediate Move-In</p>
                                        <p className="text-sm text-gray-400 mt-1">Full payment or bank financing options available</p>
                                    </div>
                                </div>
                            </Card>
                        </Card>

                        {/* About This Property */}
                        <Card className="bg-stone-900 border-white/10 p-6">
                            <h2 className="text-lg mb-4">About This Property</h2>
                            <p className="text-gray-400 text-base leading-relaxed whitespace-pre-line">
                                {property.description}
                            </p>
                        </Card>

                        {/* Investment Analysis */}
                        <Card className="bg-neutral-800 border-white/10 p-6">
                            <h2 className="text-lg mb-6">Investment Analysis</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center bg-neutral-700 rounded-lg px-4 py-4">
                                    <p>Est. Monthly Rent</p>
                                    <p className="font-medium">{property.monthlyRent}</p>
                                </div>
                                <div className="flex justify-between items-center bg-neutral-700 rounded-lg px-4 py-4">
                                    <p>Annual Return</p>
                                    <p className="font-medium text-emerald-500">{property.annualReturn}</p>
                                </div>
                                <div className="flex justify-between items-center bg-neutral-700 rounded-lg px-4 py-4">
                                    <p>Value Appreciation</p>
                                    <p className="font-medium text-yellow-400">{property.appreciation}</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Side - Location & Nearby */}
                    <div className="space-y-6">
                        {/* REGA Verified Badge */}
                        <div className="flex justify-end">
                            <Badge className="bg-emerald-800 text-white text-xl px-6 py-4 rounded-2xl flex items-center gap-3">
                                <Check className="w-6 h-6" />
                                REGA VERIFIED
                            </Badge>
                        </div>

                        {/* Location & Proximity */}
                        <Card className="bg-stone-900 border-white/10 p-6">
                            <h3 className="text-base mb-4">Location & Proximity</h3>
                            <div className="bg-zinc-800 rounded-xl overflow-hidden mb-4">
                                <Image
                                    src={property.mapImage}
                                    alt="Location map"
                                    width={505}
                                    height={346}
                                    className="w-full h-auto"
                                    unoptimized
                                />
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-4 h-4 text-emerald-500" />
                                <p className="text-sm">Diriyah UNESCO Heritage Zone</p>
                            </div>
                        </Card>

                        {/* Nearby Giga-Projects */}
                        <Card className="bg-neutral-800 border-neutral-800 p-6">
                            <h3 className="text-base mb-4">Nearby Giga-Projects</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-800 rounded-full opacity-50" />
                                    <div>
                                        <p className="font-medium">New Murabba</p>
                                        <p className="text-sm text-gray-400">12 mins to New Murabba (Mukaab)</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Bottom Fixed Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur border-t border-white/10 px-4 py-4 lg:px-14">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xl font-bold">SAR 4,100,000</p>
                        <div className="flex gap-3">
                            <Button variant="outline" size="lg" className="rounded-full px-6 border-white/10">
                                <Heart className="w-5 h-5 mr-2" />
                                Save
                            </Button>
                            <Button size="lg" className="bg-emerald-800 hover:bg-emerald-700 rounded-full px-8">
                                <Check className="w-5 h-5 mr-2" />
                                Contact Agent
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsPage;