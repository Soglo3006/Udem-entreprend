import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function PartnerSection() {
  return (
    <div
      id="partenaire"
      className="p-10 bg-[#0c0c1e] items-center text-center relative z-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse">
        Nos Partenaires
      </h1>

      {/* Mobile Swiper */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="max-w-xs mx-auto"
        >
          <SwiperSlide>
            <img
              src="/Partenaires/Millénium2.png"
              alt="millénium"
              className="w-full h-auto filter grayscale hover:filter-none transition duration-500"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Partenaires/logo-edc.svg"
              alt="edc"
              className="w-full h-auto filter grayscale hover:grayscale-0 hover:invert transition duration-500"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Partenaires/RBC.svg"
              alt="RBC"
              className="w-full h-auto filter grayscale hover:filter-none transition duration-500"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>

        {/* Style for navigation arrows */}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #3B82F6;
            bottom: 10px;
            top: auto;
          }
          .swiper-button-next {
            right: 30px;
          }
          .swiper-button-prev {
            left: 20px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
          }
        `}</style>
      </div>

      {/* Desktop images */}
      <div className="hidden lg:flex justify-center items-center gap-4">
        <img
          src="/Partenaires/Millénium2.png"
          alt="millénium"
          className="m-4 filter grayscale hover:filter-none transition duration-500"
          loading="lazy"
        />
        <img
          src="/Partenaires/logo-edc.svg"
          alt="edc"
          className="w-60 h-60 m-4 filter grayscale hover:grayscale-0 hover:invert transition duration-500"
          loading="lazy"
        />
        <img
          src="/Partenaires/RBC.svg"
          alt="RBC"
          className="w-60 h-60 filter grayscale hover:filter-none transition duration-500"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default PartnerSection;
