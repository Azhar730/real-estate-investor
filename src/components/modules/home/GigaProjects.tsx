"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import { SwiperNavButtons } from "../swiper-nav/SwiperNavButtons";
import { gigaProjectsData } from "@/data/gigaProjectsData";


export default function GigaProjects() {
    return (
        <section className="p-4 lg:p-8 overflow-hidden">
            <Container>
                {/* Section Title */}
                <div className="text-left mb-4">
                    <h2 className="text-xl font-bold text-white mb-2">
                        Giga Projects
                    </h2>
                    <p className="text-zinc-400 text-sm">
                        Invest near Saudi Arabia's transformational developments
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 32,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 48,
                            },
                        }}
                        className=" !pb-8"
                    >
                        {gigaProjectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-lg">
                                        {/* Image */}
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-4 text-white bg-[#262d3a] opacity-80">
                                            <h3 className="text-xl font-bold">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-zinc-200">
                                                {project.subtitle}
                                            </p>

                                        </div>

                                    </div>
                                    <p className="text-yellow-500 font-medium text-sm md:text-base hover:text-yellow-400 transition flex items-center gap-2 p-2">
                                        View properties within 2km
                                        <ArrowRight />
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Navigation Buttons */}
                        <SwiperNavButtons />
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}