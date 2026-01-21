"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, Car, Copy, VectorSquare } from "lucide-react";
import Container from "@/components/shared/Container";
import { SwiperNavButtons } from "../swiper-nav/SwiperNavButtons";
import { gigaProjectsData } from "@/data/gigaProjectsData";
import Link from "next/link";
import Image from "next/image";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function GigaProjects() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="p-4 lg:p-8 overflow-hidden">
      <Container>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Giga Projects</h2>
          <p className="text-zinc-400 text-sm">
            Invest near Saudi Arabia's transformational developments
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {gigaProjectsData.map((project) => {
            const isActive = activeId === project.id;

            return (
              <SwiperSlide key={project.id}>
                <div
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                  className="group bg-neutral-800 rounded-xl overflow-hidden transition-all duration-500"
                >
                  {/* IMAGE (CLICKABLE) */}
                  <div
                    onClick={() => handleToggle(project.id)}
                    className="relative cursor-pointer"
                  >
                    <div className="aspect-4/3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 p-4 text-white">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-zinc-200">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={"/#"}
                    className="text-yellow-500 text-sm p-3 flex items-center gap-2"
                  >
                    View properties within {project.nearbyRadius}
                    <ArrowRight size={16} />
                  </Link>

                  {/* EXPANDED CONTENT */}
                  {isActive && (
                    <div className="p-4 space-y-4 text-white animate-in slide-in-from-top-2">
                      {/* <Link href={'/#'} className="text-yellow-500 text-sm p-3 flex items-center gap-2">
                        View properties within {project.nearbyRadius}
                        <ArrowRight size={16} />
                      </Link> */}
                      {/* Sold Units */}
                      <div>
                        <p className="text-sm mb-1">Sold Units</p>
                        <div className="w-full bg-zinc-700 rounded-full h-2">
                          <div
                            className="bg-linear-to-t from-[#FFD700] to-[#006C35] h-2 rounded-full"
                            style={{ width: `${project.soldPercentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-right mt-1">
                          {project.soldPercentage}%
                        </p>
                      </div>

                      {/* INFO GRID */}
                      <div className="grid grid-cols-2 gap-4 text-xs lg:text-sm ">
                        <div className="bg-[#FFFFFF1A] p-3 rounded-lg flex flex-col items-center gap-2 ">
                          <p>{project.priceRange}</p>
                          <p className="text-zinc-300 text-center flex items-center gap-2">
                            <Image
                              src={"/saudi-rial.svg"}
                              alt="saudi-rial"
                              height={20}
                              width={20}
                            />
                            Saudi Riyal
                          </p>
                        </div>
                        <div className="bg-[#FFFFFF1A] p-3 rounded-lg flex flex-col items-center gap-2 ">
                          <div className="flex items-center gap-2">
                            <VectorSquare className="h-4 w-4" />
                            <p>324 - 324</p>
                          </div>
                          <p className="text-zinc-300 text-center flex items-center gap-2">
                            <Car className="h-4 w-4" />4 - 4
                          </p>
                        </div>
                        <p className="flex items-center justify-center gap-2 bg-[#FFFFFF1A] p-2 rounded-lg text-xl">
                          AD ID #
                          <Copy className="text-emerald-500" />
                        </p>
                        <p className="text-center bg-[#FFFFFF1A] p-2 rounded-lg text-xl">
                          More Info
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex gap-3"></div>
                    </div>
                  )}

                  {/* FOOTER LINK */}
                </div>
              </SwiperSlide>
            );
          })}

          <SwiperNavButtons />
        </Swiper>
      </Container>
    </section>
  );
}
