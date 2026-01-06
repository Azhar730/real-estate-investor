"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "@/components/shared/Container";
import { developerProjectsData } from "@/data/developerProjectsData";

export default function GigaProjects() {
    return (
        <section className="p-4 lg:p-8 bg-neutral-800 overflow-hidden">
            <Container>
                {/* Section Title */}
                <div className="text-left mb-6">
                    <h2 className="text-xl font-bold text-white mb-2">
                        Projects by developers in KSA
                    </h2>
                    <p className="text-zinc-400 text-sm">
                        Leading Developments Across Saudi Arabia
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        loop={true}
                        // autoplay={{
                        //     delay: 5000,
                        //     disableOnInteraction: false,
                        // }}
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
                        {developerProjectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="group cursor-pointer bg-white">
                                    <div className="relative overflow-hidden">
                                        {/* Image */}
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-black/10 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-4 text-white bg-[#262d3a] opacity-80">
                                            <h3 className="text-xl md:text-xl font-bold mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-zinc-200">
                                                {project.description}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}